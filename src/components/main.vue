<template>
  <div class="tab_box">
    <ul class="patientinput">
      <li>
        <span class="tit">起始日期</span>
        <datepicker v-on:input="selectstarttime" :time="starttime"></datepicker>
      </li>
      <li>
        <span class="tit">结束日期</span>
        <datepicker v-on:input="selectendtime" :time="endtime"></datepicker>
      </li>
      <li>
        <span class="tit">手机号码</span>
        <input type="text" class="text" placeholder="请输入手机号码" v-model="telephone">
      </li>
      <li v-if="vcodeshow">
        <span class="tit">验证码</span>
        <input type="text" value="" class="text" placeholder="请输入验证码" v-model="vcode">
        <span class="btn" id="btn" value="发送验证码" v-if="show" @click="getCode">获取验证码</span>
        <span class="dactive" id="btn" value="发送验证码" v-if="!show">{{count}} s</span>
      </li>
    </ul>
    <!-- <router-link class="tab_btn" to="/myreport"> -->
    <div class="Advisory" @click="getreport">点击查询</div>
    <!-- </router-link> -->
    <div class="error" v-if="errors.length">
      <img src="@/assets/警告.png" alt="" class="warning">
      <div class="errortext">
        <b>出现错误：</b>
        <ul>
          <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import datepicker from "@/components/datepicker.vue";
var CryptoJS = require("crypto-js");
export default {
  name: "HelloWorld",
  components: {
    datepicker
  },

  data() {
    return {
      show: true,
      count: "",
      timer: null,
      info: "",
      telephone: "",
      vcode: "",
      errors: [],
      vcodeshow: true
    };
  },
  watch: {
    telephone: function(el) {
      var bytes = CryptoJS.AES.decrypt(this.telephonenum, "secret key 123");
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (el !== originalText) this.vcodeshow = true;
      else this.vcodeshow = false;
    }
  },
  props: {
    msg: String
  },
  methods: {
    Encrypt(message) {
      return CryptoJS.AES.encrypt(message, "secret key 123").toString();
    },
    Decrypt(ciphertext) {
      var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    showToast(text, t) {
      this.$toast(text, t);
    },
    selectstarttime: function(data) {
      this.$store.commit("selectstarttime", data);
    },
    selectendtime: function(data) {
      this.$store.commit("selectendtime", data);
    },
    getCode() {
      if (this.telephoneverification(this.telephone)) {
        this.getvcode();
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt(
          this.telephone,
          "secret key 123"
        ).toString();
        this.$store.commit("gettelephonenum", ciphertext);
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      } else {
        this.showToast("请输入正确的电话号码", 2000);
      }
    },

    getreport() {
      this.errors = [];
      if (!this.starttime) this.errors.push("请选择起始时间");
      if (!this.endtime) this.errors.push("请选择结束时间");
      if (!this.telephone) this.errors.push("请输入手机号");
      if (this.vcodeshow === true) {
        if (!this.vcode) this.errors.push("请输入验证码");
        else if (this.vcode != "1234") {
          this.errors.push("验证码错误");
        }
      }

      if (!this.errors.length) {
        this.$http({
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          // transformRequest: [data => this.$qs.stringify(data)],
          method: "post",
          url: "/AjaxTest/TestMethod.ashx",
          data: this.$qs.stringify({
            param: `{    
            "method": "GetRegionalReports",   
            "telephone": "${this.telephone}",    
            "area_code": "${this.selectedcityname}",    
            "start_time": "${this.starttime}",     
            "end_time": "${this.endtime}" }`
          })
        })
          .then(response => {
            this.$store.commit("getmyreport", response.data.data);
            if (response.data.success === "false") {
              this.showToast(response.data.data, 2000);
            } else if (response.data.data.length === 0) {
              this.showToast("没有找到影像", 2000);
            } else if (response.data.success === "true") {
              this.$router.push({ path: "/myreport" });
            }
          })
          .catch(error => {
            this.showToast(`连接失败${error}`, 5000);
          });
      }
    },
    // getreport1(){console.log("5")},
    getvcode() {
      this.$http({
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "post",
        url: "/AjaxTest/TestMethod.ashx",
        data: this.$qs.stringify({
          param: `{    
            "method": "SendMessage",   
            "telephone": "${this.telephone}",   
            "verify_code": "123" }`
        })
      })
        .then(response => {
          this.showToast(response.data.data, 2000);
        })
        .catch(error => {
          this.showToast(`连接失败${error}`, 5000);
        });
    },
    telephoneverification(tel) {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
      var phoneNum = tel; //手机号码
      return reg.test(phoneNum); //true
    },
    picarray(array) {
      let arr = array.split("}");
      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i] + "}";
      }
      return arr;
    }
  },
  computed: {
    selectedcityname() {
      let localData = window.localStorage.getItem("selectedcityname");
      if (!this.$store.selectedcityname && localData) {
        this.$store.commit("selectcity", localData); //同步操作
      }
      return this.$store.state.selectedcityname;
    },
    starttime() {
      let localData = window.localStorage.getItem("starttime");
      if (!this.$store.starttime && localData) {
        this.$store.commit("selectstarttime", localData); //同步操作
      }
      return this.$store.state.starttime.split("-").join("/");
    },
    endtime() {
      let localData = window.localStorage.getItem("endtime");
      if (!this.$store.endtime && localData) {
        this.$store.commit("selectendtime", localData); //同步操作
      }
      return this.$store.state.endtime.split("-").join("/");
    },
    allreport() {
      // let localData = window.localStorage.getItem("allreport");
      // if (!this.$store.allreport && localData) {
      //   this.$store.commit("getmyreport", localData); //同步操作
      // }
      return this.$store.state.allreport;
    },
    telephonenum() {
      let localData = window.localStorage.getItem("telephonenum");

      if (!this.$store.telephonenum && localData) {
        this.$store.commit("gettelephonenum", localData); //同步操作
      }
      return this.$store.state.telephonenum;
    }
  },
  mounted() {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(this.telephonenum, "secret key 123");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    this.telephone = originalText;
    let Y, M, D, DATE;
    Y = new Date().getFullYear() + "-";
    M =
      (new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1) + "-";
    D = new Date().getDate() + " ";
    DATE = Y + M + D;
    this.$store.commit("selectendtime", DATE);
    let Y2, M2, D2, DATE2;
    Y2 = new Date().getFullYear() + "-";
    M2 =
      (new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1) -
      2 +
      "-";
    D2 = new Date().getDate() + " ";
    DATE2 = Y2 + M2 + D2;
    this.$store.commit("selectstarttime", DATE2);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab_box {
  padding-bottom: 5px;
  display: block;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.patientinput {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.patientinput li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  line-height: 2.5rem;
  margin: 5px 0px;
  position: relative;
}
.patientinput .tit {
  font-size: 1rem;
}
.targetContainer1 {
  position: absolute;
}
.btn {
  width: 25%;
  text-align: center;
  display: inline-block;
  position: absolute;
  right: 10px;
  padding: 0 5px;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 12px;
  color: white;
  background: #00d2c7;
  outline: none;
  border: 0;
  border-radius: 4px;
}
.btn:hover {
  background: #00d2c7;
}
.btn:active {
  background: #00d2c7;
}
.btn.current {
  background: #b1b1b1;
}
.dactive {
  width: 25%;
  text-align: center;
  display: inline-block;
  position: absolute;
  right: 10px;
  padding: 0 5px;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 12px;
  color: white;
  background: #b1b1b1;
  outline: none;
  border: 0;
  border-radius: 4px;
}
input {
  padding-left: 10px;
  background: none;
  outline: none;
  border: 0px;
  width: 70%;
}
input:focus {
  outline: none;
}
input {
  font-size: 1rem;
  height: 2.5rem;
  border-radius: 4px;
  border: 1px solid #c8cccf;
  color: #6a6f77;
  position: relative;
}
.Advisory {
  font-size: 14px;
  width: 80%;
  padding: 10px;
  background: linear-gradient(45deg, #00d2c7, rgba(0, 190, 156, 0.6));
  color: white;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
.Advisory:hover {
  background: #00c2b8;
}
.Advisory:active {
  background: #00d2c7;
}
.getreport {
  margin: 20px 0;
  text-decoration: none;
}
.error {
  margin-top: 10px;
  width: 80%;
  border: 0.5px red solid;
  background-color: rgb(233, 134, 134);
  color: #e6e6e6;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.warning {
  width: 50px;
  height: 50px;
}
.errortext {
  margin-left: 20px;
}
</style>
