<template>
  <div id="reportdetail">
    <userinfo></userinfo>
    <bind></bind>
    <morereport></morereport>
    <dropdown></dropdown>
    <dropdown1></dropdown1>
    <SlimPopup :show.sync="show" :popupClass="['popup']" popupTransition="popupTransition" :hideOnMaskClick='true'>
      <h2 style="color: #6D7A80;">
        <img src=".././assets/CTerweima.png" alt="">
      </h2>
      <div class="close-btn" @click="show = false">X</div>
    </SlimPopup>
    <hr>
    <div class="logo_div">Powered By Zhejiang Kayi Smart Health Technology Co.,LTD</div>
    <div class="bottombox">
      <div class="btnbox">
        <img class="imgstyle" src=".././assets/医学资料.png">
        <span>使用说明</span>
      </div>
      <div class="btnbox boxboder" id="ewm" @click="show = true">
        <img class="imgstyle" src=".././assets/图片.png">
        <span>影像问诊</span>
      </div>
      <div class="btnbox">
        <img class="imgstyle" src=".././assets/档案.png">
        <span>存个人档案</span>
      </div>
    </div>
  </div>
</template>

<script>
import userinfo from "@/components/reportdetail/userinfo";
import bind from "@/components/reportdetail/bind";
import dropdown from "@/components/reportdetail/dropdown";
import dropdown1 from "@/components/reportdetail/dropdown1";
import morereport from "@/components/reportdetail/morereport";
import SlimPopup from "vue-slim-popup";

export default {
  name: "reportdetail",
  components: {
    bind,
    userinfo,
    dropdown,
    dropdown1,
    morereport,
    SlimPopup
  },
  data() {
    return {
      show: false,
      popupTransition: "slim-fade-in-bottom"
    };
  },
  methods: {
  }
};
</script>

<style>

.of {
  overflow: hidden;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
* {
  margin: 0;
  padding: 0;
}
body,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0px;
  padding: 0px;
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
  color: #333333;
}
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 12px;
}
body {
  background-color: #ffffff;
  margin: 0px;
}
.slider {
  position: fixed;
  top: 4%;
  left: 90%;
}
hr {
  opacity: 0;
  margin-bottom: 120px;
}
.logo_div {
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  color: gray;
  text-align: center;
  position: fixed;
  bottom: 60px;
  z-index: -1;
  max-width: 600px;
}
.bottombox {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 40px;
  max-width: 600px;
  border-top: 1px solid #e5e5e5;
  z-index: 10;
  background: white;
  font-size: 13px;
}
.btnbox {
  width: 33%;
  line-height: 40px;
  text-align: center;
  float: left;
}
.imgstyle {
  vertical-align: middle;
  width: 20%;
}
.boxboder {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}

.popup {
  width: 80%;
  height: 200px;
  border-radius: 16px;
  text-align: center;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.close-btn {
  font-size: 20px;
  font-weight: 500;
  color: #6a9fb5;
  background-color: #fafafa;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 4px;
}
</style>
