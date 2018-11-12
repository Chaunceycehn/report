<template>
  <div id="app">
    <router-view class="page"></router-view>
    <nav class="tab">
      <router-link class="tab_btn selected" to="/">查询影像</router-link>
      <router-link class="tab_btn" to="/myreport">我的影像/报告</router-link>
    </nav>
  </div>
</template>

<script>
export default {

};
</script>



<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 100%;
}
body {
  background-color: #f8f8f8;
  min-height: 100vh;
}
li {
  list-style: none;
}

.tab {
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  border-top: 0.5px solid #ddd;
  font-size: 14px;
  border-radius: 5px;
  vertical-align: top;
  white-space: normal;
  z-index: 1;
}
.tab_btn {
  padding: 10px 0 10px 0;
  display: inline-block;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: black;
}

.tab-content-list {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
}

.router-link-exact-active {
  color: #41b883;
}
.router-link-exact-active::after {
  content: "";
  height: 2px;
  width: 100%;
  background: #41b883;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
