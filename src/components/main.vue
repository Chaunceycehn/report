<template>
  <div class="tab_box">
    <ul class="patientinput">
      <li>
        <span class="tit">起始日期</span>
        <div id="targetContainer1"></div>
        <datepicker v-on:input="selectstarttime" :time="starttime"></datepicker>
      </li>
      <li>
        <span class="tit">结束日期</span>
        <div id="targetContainer2"></div>
        <datepicker v-on:input="selectendtime" :time="endtime"></datepicker>
      </li>
      <li>
        <span class="tit">手机号码</span>
        <input type="text" value="" class="text" placeholder="请输入手机号码" v-model="telephone">
      </li>
      <li>
        <span class="tit">验证码</span>
        <input type="text" value="" class="text" placeholder="请输入验证码" v-model="vcode">
        <span class="btn" id="btn" value="发送验证码" v-if="show" @click="getCode">获取验证码</span>
        <span class="dactive" id="btn" value="发送验证码" v-if="!show">{{count}} s</span>
      </li>
    </ul>
    <!-- <router-link class="tab_btn" to="/myreport"> -->
      <div class="Advisory" @click="getreport">点击查询</div> 
    <!-- </router-link> -->
  </div>
</template>

<script>
import datepicker from "@/components/datepicker.vue";

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
      vcode: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
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
        this.$store.commit("gettelephonenum", this.telephone);
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
      this.$http({
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // transformRequest: [data => this.$qs.stringify(data)],
        method: "post",
        url: "/AjaxTest/TestMethod.ashx",
        data: this.$qs.stringify({
          param: `{    
            "method": "GetRegionalReports",   
            "telephone": "${this.telephonenum}",    
            "area_code": "${this.selectedcityname}",    
            "start_time": "${this.starttime}",     
            "end_time": "${this.endtime}" }`
        })
      })
        .then(response => {
          // let arry = this.picarray(response.data);
          console.log(response.data.data)
          this.$store.commit("getmyreport",response.data.data);
          // console.log(arry);
          // for (let i = 0; i < arry.length - 1; i++) {
          //   console.log(JSON.parse(arry[i]));
          // }
          this.$router.push({path:'/myreport'});
        })
        .catch(error => {
          this.showToast(error);
        });
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
          console.log(error);
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
    starttime() {
      return this.$store.state.starttime.split("-").join("/");
    },
    endtime() {
      return this.$store.state.endtime.split("-").join("/");
    },
    selectedcityname() {
      return this.$store.state.selectedcityname;
    },
    templetime() {
      return this.$store.state.starttime.split("-").join("");
    },
    allreport() {
      return this.$store.state.allreport;
    },
    telephonenum() {
      return this.$store.state.telephonenum;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab_box {
  padding-bottom: 5px;
  display: block;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.patientinput {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.patientinput li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  line-height: 2.5rem;
  margin: 5px 0px;
}
.patientinput .tit {
  font-size: 1rem;
}
.targetContainer1 {
  position: absolute;
}
.btn {
  width: 25vw;
  text-align: center;
  display: inline-block;
  position: absolute;
  right: 3%;
  padding: 0 5px;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 12px;
  color: white;
  background: #41b883;
  outline: none;
  border-radius: 0;
  border: 0;
}
.btn:hover {
  background: #18836a;
}
.btn:active {
  background: #18836a;
}
.btn.current {
  background: #b1b1b1;
}
.dactive {
  width: 25vw;
  text-align: center;
  display: inline-block;
  position: absolute;
  right: 3%;
  padding: 0 5px;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 12px;
  color: white;
  outline: none;
  border-radius: 0;
  border: 0;
  background: #b1b1b1;
}
input {
  padding-left: 10px;
  background: none;
  outline: none;
  border: 0px;
  width: 70vw;
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
  width: 80vw;
  padding: 10px;
  background-color: #41b883;
  color: white;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
.Advisory:hover {
  background: #18836a;
}
.Advisory:active {
  background: #18836a;
}
.getreport {
  margin: 20px 0;
  text-decoration: none;
}
</style>
