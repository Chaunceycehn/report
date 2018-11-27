<template>
  <div class="tab_box">
    <div class="headbox">
      <div class="title">我的影像/报告</div>
    </div>
    <div class="noreprot" v-if="lists.length==0" @click="gobeck">
      <img src="@/assets/为空.png" alt="" class="weikong">
      <p>暂无影像报告，请点击立即查询</p>
    </div>
    <div class="lists" v-if="lists.length">
      <ul>
        <li
          class="list"
          v-for="(list,index) in lists"
          :key="index"
          @click="gotodetail(list.AccessNo)"
        >
          <div class="first">
            <img src="@/assets/影像.png" alt="" class="weikong">
          </div>
          <div class="middle">
            <span class="hospital Dengjipart">{{list.Dengjipart}}</span>
            <div class="subtitlecontain">
              <div class="subtitle">
                <span class="Modality">检查设备：{{list.Modality}}</span>
                <span class="Name">{{list.Hospital_Name}}</span>
              </div>
              <div class="subtitle">
                <span class="Pat_Type">检查类型：{{list.Pat_Type}}</span>
                <span class="ModCheckDate">检查日期：{{list.ModCheckDate | timecut}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var CryptoJS = require("crypto-js");

export default {
  data() {
    return {
      lists: []
    };
  },
  filters: {
    timecut: function(value) {
      if (!value) return "";
      value = value.split(" ");
      return value[0];
    }
  },
  methods: {
    Encrypt(message) {
      return CryptoJS.AES.encrypt(message, "secret key 123").toString();
    },
    Decrypt(ciphertext) {
      var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    gobeck() {
      this.$router.push({ path: "/" });
    },
    renderlist() {
      this.lists = this.reportdata;
    },
    setStyle: function(el) {
      if (el > 6) {
        el = el / 6;
      }
      return this.colors[Math.floor(Math.random() * (6 - el))];
    },
    gotodetail(accessno) {
      this.$http({
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // transformRequest: [data => this.$qs.stringify(data)],
        method: "post",
        url: "/AjaxTest/TestMethod.ashx",
        data: this.$qs.stringify({
          param: `{     "method": "GetReportDetails",     "accessno": "${accessno}" }`
        })
      })
        .then(response => {
          this.$store.commit("getreportdetail", response.data.data[0]);
          this.$router.push({ path: "/reportdetail" });
        })
        .catch(error => {
          this.showToast(error.data);
        });
    }
  },
  computed: {
    reportdata() {
      let localData = JSON.parse(this.Decrypt(window.localStorage.getItem("allreport")));
      if (!this.$store.allreport && localData) {
        this.$store.commit("getmyreport", localData); //同步操作
      }
      return JSON.parse(this.Decrypt(this.$store.state.allreport));
    }
  },
  created() {
    this.renderlist();
  },
  beforeMount() {
    this.renderlist();
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-family: "黑体";
}
.headbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headbox {
  z-index: 999;
  background: linear-gradient(45deg, #00d2c7, rgba(0, 190, 156, 0.6));
  width: 100%;
  height: 50px;
  color: white;
  font-size: 16px;
}

.tab_box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.lists {
  width: 95%;
}
.list {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: space-between;
  border-bottom: 1px solid #c5c2c2;
}
.first {
  display: flex;
  align-items: center;
}

.middle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.hospital {
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
}
.subtitlecontain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  padding-right: 5px;
  color: #807d7d;
}
.subtitle {
  margin-left: 20px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}
.Dengjipart {
  margin-right: 20px;
}
.weikong {
  width: 30px;
}
.lists {
  margin-right: auto;
  margin-left: auto;
}
.list {
  cursor: pointer;
}
.list:last-child {
  margin-bottom: 40px;
}
.list:hover {
  background-color: #e7e6e6;
}
.list:active {
  background-color: #e7e6e6;
}
.noreprot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
  color: #969696;
}
.Dengjipart {
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
