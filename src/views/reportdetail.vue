<template>
  <div id="reportdetail">
    <userinfo></userinfo>
    <bind></bind>
    <morereport></morereport>
    <dropdown></dropdown>
    <dropdown1></dropdown1>

    <hr>
    <div class="logo_div">Powered By Zhejiang Kayi Smart Health Technology Co.,LTD</div>

  </div>
</template>

<script>
import userinfo from "@/components/reportdetail/userinfo";
import bind from "@/components/reportdetail/bind";
import dropdown from "@/components/reportdetail/dropdown";
import dropdown1 from "@/components/reportdetail/dropdown1";
import morereport from "@/components/reportdetail/morereport";

export default {
  name: "reportdetail",
  components: {
    bind,
    userinfo,
    dropdown,
    dropdown1,
    morereport,
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
  margin-bottom: 100px;
}
.logo_div {
  position: relative;
  font-size: 10px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  color: gray;
  text-align: center;
  position: fixed;
  bottom: 60px;
  z-index: -1;
  margin-top: 60px;
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
  height: 400px;
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
