<template>
  <div id="app" class="app">
    <router-view class="page"></router-view>

  </div>
</template>

<script>
export default {};
</script>



<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 100%;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  background: #fafafa;
  box-shadow: #e5e5e5 0px 0px 5px 1px;
}
body {
  background-color: #f8f8f8;
  min-height: 100vh;
}
li {
  list-style: none;
}
.app {
  
}

.tab {
  position: fixed;
  bottom: 0;
  background-color: white;
  max-width: 600px;
  width: 100%;
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
  width: 100%;
  align-items: center;
}

.router-link-exact-active {
  color: #06c193;
}
.router-link-exact-active::after {
  content: "";
  height: 2px;
  width: 100%;
    background: linear-gradient(45deg, #00d2c7, rgba(0, 190, 156, 0.6));
  position: absolute;
  bottom: 0;
  left: 0;
}
.el-loading-spinner .path {
  stroke: #06c193;
}
.el-loading-spinner .el-loading-text {
  color: #06c193;
}
input {
  height: 50px;
}
</style>
