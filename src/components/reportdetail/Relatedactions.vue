<template>
  <div class="my_nav">
    <a
      id="open_ElectronicFilm"
      style="width: 20%;"
      href="javascript:window.location.href='http://www.kayicloud.com:8080/wujiquery/MainPacs.aspx?stuuid=1.2.410.200010.86.101.057703.20170619112736.201705060001&lossless=1'"
    >电子胶片</a>
    <a id="download_dicomimg" style="width: 20%;">图像下载</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my_nav {
  line-height: 2.5em;
  display: flex;
  justify-content: space-around;
  margin: 5px 0px;
}

.my_nav a {
  display: inline-block;
  font-size: 12px;
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
