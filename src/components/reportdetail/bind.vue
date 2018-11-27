<template>
  <div class="bind">
    <!-- <section>
      <div class="bind_li">
        <ul class="liclomn">
          <ul class="lirow">
            <li class="sub_title lirow_l">&nbsp;&nbsp; 影像号码:{{report.AccessNo}}</li>
            <li class="sub_title lirow_l">&nbsp;&nbsp; 检查设备:{{report.Modality}}</li>
          </ul>
          <li class="sub_title">&nbsp;&nbsp; 检查时间:{{report.reportdate}}</li>
          <li class="sub_title Dengjipart">&nbsp;&nbsp; 检查部位:{{report.Dengjipart}}</li>
          <li class="sub_title">&nbsp;&nbsp; 检查医院:{{report.Hospital_Name}}</li>
        </ul>
      </div>
    </section>
    <section class="bind_li">
      <div class="title">
        <img src="http://kyapp.webris.cn/KyDemo/images/li_ico1.png" class="li_ico1 fl" width="3px">
        <h2>影像所见：</h2>
      </div>
      <p id="P1">{{report.reportinfo}}</p>
      <div class="clear"></div>
    </section>
    <section class="bind_li">
      <div class="title">
        <img src="http://kyapp.webris.cn/KyDemo/images/li_ico1.png" class="li_ico1 fl" width="3px">
        <h2>诊断结果：</h2>
      </div>
      <p id="P2">{{report.reportend}}</p>
      <div class="clear"></div>
    </section>-->
    <section class="contentbox">
      <div class="of info_div_1">
        <table class="tb_class fl">
          <tbody>
            <tr>
              <td class="fl sub_title l_txt">&nbsp;&nbsp; 影像号码:{{report.AccessNo}}</td>
              <td class="sub_title l_txt">&nbsp;&nbsp; 检查时间:{{report.reportdate | cuttime}}</td>
            </tr>
            <tr>
              <td class="fl sub_title l_txt">&nbsp;&nbsp; 检查设备:{{report.Modality}}</td>
              <td class="sub_title l_txt">&nbsp;&nbsp; 检查部位:{{report.Dengjipart}}</td>
            </tr>
            <tr>
              <td class="sub_title" colspan="2">&nbsp;&nbsp; 检查医院:{{report.Hospital_Name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <section class="bind_li">
        <div class="fl main_shu"></div>
        <h2>影像所见：</h2>
        <pre id="P1">{{report.reportinfo}}</pre>
        <div class="clear"></div>
      </section>
      <section class="bind_li">
        <div class="fl main_shu"></div>
        <h2>诊断结果：</h2>
        <pre id="P2">{{report.reportend}}</pre>
        <div class="clear"></div>
      </section>
      <section class="my_nav">
        <a>调阅图像</a>
        <a>图像下载</a>
        <a @click="show = true">一键分享</a>
      </section>
      <section class="od_tip">
        <span class="tit_new">温馨提示：建议在WiFi环境下调阅图像！</span>
      </section>
    </section>
    <SlimPopup
      :show.sync="show"
      :popupClass="['popup']"
      popupTransition="popupTransition"
      :hideOnMaskClick="true"
    >
      <h2 style="color: #6D7A80;">
        <img src="../../assets/CTerweima.png" alt="">
      </h2>
      <div class="close-btn" @click="show = false">X</div>
    </SlimPopup>
  </div>
</template>

<script>
import SlimPopup from "vue-slim-popup";
var CryptoJS = require("crypto-js");

export default {
  name: "bind",
  components: {
    SlimPopup
  },
  data() {
    return {
      report: {},
      show: false
    };
  },
  methods: {
    Encrypt(message) {
      return CryptoJS.AES.encrypt(message, "secret key 123").toString();
    },
    Decrypt(ciphertext) {
      var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    renderreport() {
      this.report = this.reportdetail;
    }
  },
  computed: {
    reportdetail() {
      let localData = JSON.parse(
        this.Decrypt(window.localStorage.getItem("reportdetail"))
      );
      if (!this.$store.reportdetail && localData) {
        this.$store.commit("getreportdetail", localData); //同步操作
      }
      return JSON.parse(this.Decrypt(this.$store.state.reportdetail));
    }
  },
  beforeMount() {
    this.renderreport();
  },
  mounted() {
    // console.log(this.report);
  },
  filters: {
    cuttime: function(value) {
      if (!value) return "";
      let v = value.split(" ");
      return v[0];
    }
  }
};
</script>

<style scoped>
.contentbox {
  border: 1px solid #d3d3d3;
  background: #fff;
  margin: 0 0 0.7em 0;
  padding: 0.3em 0.5em 0.6em 0.5em;
  border-bottom-right-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  position: relative;
  color: #717675;
  z-index: 1;
}
.tb_class {
  width: 100%;
  margin-bottom: 5px;
}
.info_div_1 {
  color: #666;
  line-height: 24px;
}
.od_tip {
  border-radius: 5px;
  background: #fff;
  margin-top: 0.6em;
  font-size: 0.9em;
  line-height: 1.8em;
}

.od_tip .tit_new {
  color: red;
  padding-left: 1em;
  background: url(../../assets/result_li.png) no-repeat left center;
  background-size: auto 300%;
}
.sub_title {
  font-size: 13px;
  color: #333;
  background: url(../../assets/result_li.png) no-repeat left center;
  overflow: auto;
  white-space: nowrap;
}

.bind_li {
  border: 1px solid #d3d3d3;
  background: #fff;
  margin: 0 0 0.7em 0;
  /*padding: 0.3em 0.9em 0.6em 0.9em;*/
  border-radius: 0.3em;
  position: relative;
  color: #717675;
}

.bind_li h2 {
  height: 2.5em;
  line-height: 2em;
  font-size: 16px;
  color: #2d2d2d;
  border-bottom: 1px dashed #d3d3d3;
  padding: 0.3em 0.9em 0.6em 0.9em;
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
}

.bind_li pre {
  font-size: 0.9em;
  line-height: 1.6em;
  padding-top: 0.4em;
  padding: 0.3em 0.9em 0.6em 0.9em;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

.bind_li textarea {
  font-size: 0.9em;
  height: 6em;
  width: auto;
  border: 0;
  resize: vertical;
  outline-color: #1ef60e;
  -webkit-appearance: none;
  /*padding: 1em;*/
  background: none;
}

.main_shu {
  width: 1px;
  border: 1.5px solid #00d2c7;
  height: 18px;
  /* border-radius: 2px; */
  margin-top: 6px;
  height: 1.6em;
}
div.clear {
  font: 0px Arial;
  line-height: 0;
  height: 0;
  overflow: hidden;
  clear: both;
}

.my_nav {
  height: 2.5em;
  line-height: 2.5em;
  margin: 1em 0 1em 0;
  clear: both;
  display: flex;
  justify-content: center;
}

.my_nav a {
  display: inline-block;
  height: 2.5em;
  line-height: 2.5em;
  width: 25%;
  text-align: center;
  background: linear-gradient(45deg, #00d2c7, rgba(0, 190, 156, 0.6));
  margin: 0 2%;
  color: #fff;
  border-radius: 1.25em;
  text-decoration: none;
}

.my_nav a:active {
  background: #06c193;
}

.my_nav .short {
  width: 22%;
}
</style>
