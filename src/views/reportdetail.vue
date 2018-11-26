<template>
  <div id="reportdetail">
    <userinfo></userinfo>
    <bind></bind>
    <!-- <Relatedactions></Relatedactions> -->
    <dropdown></dropdown>
    <dropdown1></dropdown1>
  </div>
</template>

<script>
import userinfo from "@/components/reportdetail/userinfo";
import bind from "@/components/reportdetail/bind";
// import Relatedactions from "@/components/reportdetail/Relatedactions";
import dropdown from "@/components/reportdetail/dropdown";
import dropdown1 from "@/components/reportdetail/dropdown1";

export default {
  name: "reportdetail",
  components: {
    bind,
    userinfo,
    // Relatedactions,
    dropdown,
    dropdown1,
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
</style>
