<template>
    <div class="tab_box">
        <div class="headbox">
            <div class="title">我的影像/报告</div>
        </div>
        <ul class="MyReport">
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
            <li>
                <img src="@/assets/ct.png" alt="">
                <div>
                    <span>平阳县人民医院</span>
                    <span>扫描部位：颅脑平扫,颔面部平</span>
                    <span>检查日期: 2018-02-19</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headbox {
  z-index: 999;
  background: #41b883;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 16px;
}

.tab_box {
  padding-bottom: 5px;
  display: block;
  width: 100vw;
}
.MyReport > li > img {
  width: 110px;
  height: 70px;
  margin: 0 10px;
}
.MyReport > li {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: space-between;
}
.MyReport > li > div {
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 14px;
}
.MyReport > li > div > span:last-child {
  align-self: flex-end;
  position: relative;
  bottom: -15px;
  right: 3px;
  font-size: 10px;
}
.MyReport > li:hover {
  background-color: #e7e6e6;
}
.MyReport > li:active {
  background-color: #e7e6e6;
}
</style>
