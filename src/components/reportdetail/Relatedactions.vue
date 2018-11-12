<template>
    <div class="my_nav">
        <a id="open_dicomimg" href="javascript:window.location.href='ImageRetrievalOff.aspx?imgid=8id3ef7un1pE7iesQHkD8Q=='" style="width: 20%;">调阅图像</a>
        <a id="open_ElectronicFilm" style="width: 20%;" href="javascript:window.location.href='http://www.kayicloud.com:8080/wujiquery/MainPacs.aspx?stuuid=1.2.410.200010.86.101.057703.20170619112736.201705060001&lossless=1'">电子胶片</a>
        <a id="download_dicomimg" style="width: 20%;">图像下载</a>
        <a onclick="clickopen()" style="width: 20%;">一键分享</a>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my_nav {
  line-height: 2.5em;
  margin: 1em 0 1em 0;
  clear: both;
}

.my_nav a {
  display: inline-block;
  font-size: 12px;
  width: 25%;
  text-align: center;
  background: #00be9c;
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
