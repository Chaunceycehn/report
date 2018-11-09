<template>
    <div>
        <header>
            <img class="portrait" src="@/assets/patient_girl.png">
            <div class="patient-name">刘*玲</div>
            <div class="patient-info">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nv"></use>
                </svg>
                <span class="age">33岁</span>
            </div>
            <svg id="triggerBtn" class="icon fenxiang" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <!-- <svg class="icon caidan" aria-hidden="true">
            <use xlink:href="#icon-caidan"></use>
            </svg>-->
        </header>
        <!-- <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span id="closeBtn" class="close">×</span>
                </div>
                <div class="modal-body">
                    <img src="@/assets/QRcode.png" alt="#">
                </div>
                <div class="modal-footer">
                    <div>
                        <p>请使用微信扫描该二维码,并确认对方是可信人士。</p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- <div id="ineaddoctorModal" class="modal">
            <div class="dmodal-content">
                <div class="dmodal-header">
                    <span id="dcloseBtn" class="dclose">×</span>
                </div>
                <div class="dmodal-body">
                    <img src="@/assets/QRcode.png" alt="#">
                </div>
                <div class="dmodal-footer">
                    <div>
                        <p>请使用微信扫描该二维码,咨询国内名医。</p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="mainbody">
            <section class="yingxiang-info">
                <ul>
                    <li>影像号码:KAYI01</li>
                    <li>检查设备:CT</li>
                    <li>检查医院:**市第一人民医院</li>
                </ul>
                <ul>
                    <li>检查时间:2016-08-22</li>
                    <li>检查部位:脊柱</li>
                </ul>
            </section>
            <section class="yingxiangsuojian">
                <div class="title">
                    <svg class="icon shuxian" aria-hidden="true">
                        <use xlink:href="#icon-tubiaozhizuo-"></use>
                    </svg>
                    <h2>影像所见：</h2>
                </div>
                <hr>
                <div class="text1">
                    <div class="desc1">
                        <p
                            class="desc-content"
                        >L3-4、L4-5、L5-S1椎间盘未见明显突出或膨出，诸椎体及附件骨质无殊，相应层面椎管内未见明显异常。测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
                    </div>
                    <div href="javascript:void(0);" class="iconfont icon-unfold"></div>
                </div>
            </section>
            <section class="zhenduanjieguo">
                <div class="title">
                    <svg class="icon shuxian" aria-hidden="true">
                        <use xlink:href="#icon-tubiaozhizuo-"></use>
                    </svg>
                    <h2>诊断结果：</h2>
                </div>
                <hr>
                <div class="text2">
                    <div class="desc2">
                        <p
                            class="desc2-content"
                        >L3-S1椎间盘CT平扫未见明显异常。管内未见明显异常。测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测</p>
                    </div>
                    <div href="javascript:void(0);" class="iconfont icon-unfold"></div>
                </div>
            </section>
            <div class="button">
                <a href="#">调阅图像</a>
                <a href="#">图像下载</a>
            </div>
            <section class="baogaojiedu" onclick="dropdown1()">
                <div class="title">
                    <svg class="icon shuxian" aria-hidden="true">
                        <use xlink:href="#icon-tubiaozhizuo-"></use>
                    </svg>
                    <h2>报告解读</h2>
                </div>
                <div id="Dropdown1" class="dropdown1-content">
                    <hr>
                    <p>测试测试测试测试测试测试</p>
                    <p>测试测试测试测试测试测试</p>
                    <p>测试测试测试测试测试测试</p>
                </div>
            </section>
            <section class="mingyizixun" id="mingyizixun">
                <div class="title">
                    <svg class="icon shuxian" aria-hidden="true">
                        <use xlink:href="#icon-tubiaozhizuo-"></use>
                    </svg>
                    <h2>名医咨询</h2>
                </div>
            </section>
            <section class="yuanneixiangguan" onclick="dropdown3()">
                <div class="title">
                    <svg class="icon shuxian" aria-hidden="true">
                        <use xlink:href="#icon-tubiaozhizuo-"></use>
                    </svg>
                    <h2>院内相关检查</h2>
                </div>
                <div id="Dropdown3" class="dropdown3-content">
                    <hr>
                    <p>测试测试测试测试测试测试</p>
                    <p>测试测试测试测试测试测试</p>
                    <p>测试测试测试测试测试测试</p>
                </div>
            </section>
        </div>
        <footer>
            <div class="container">
                <p
                    class="footer-p"
                >&nbsp &nbsp 团队13年以上经验，通过院内PACS/RIS、心电网络、远程会诊软件的IHH-C标准性测试，是国内少数几个全部通过上述软件标准型测试的厂家之一</p>
            </div>
            <div>技术支持：无极云影像</div>
            <div class="end">联系我们：400-xxx-xxx-xxx</div>
        </footer>
    </div>
</template>

<script>
export default {};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  overscroll-behavior-y: contain;
  font-size: 100%;
  background: linear-gradient(45deg, #00be9c, rgba(0, 190, 156, 0.6));
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
}
body {
  background: url(../assets/wallhaven-492059.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #cccccc;
}

li {
  list-style: none;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.patient-name {
  font-size: 2em;
}
.patient-info {
  font-size: 1em;
}
.portrait {
  margin-top: 20px;
}
.fenxiang {
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: 1.5rem;
  color: white;
}
.caidan {
  position: absolute;
  top: 3%;
  left: 3%;
}

.mainbody {
  width: 94vw;
  display: flex;
  flex: 1;
  flex-direction: column;
}
section {
  border-radius: 15px;
  display: flex;
  padding: 20px;
  font-size: 0.7rem;
  justify-content: space-between;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  flex-direction: column;
}
.yingxiang-info {
  flex-direction: row;
}

.title {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.shuxian {
  height: 2.5em;
  width: 2em;
  color: #62af6c;
}
h2 {
  font-size: 2em;
}
.mainbody > .body-content {
  flex: 1;
}
.portrait {
  width: 5em;
}
hr {
  margin: 10px;
}

section p {
  padding-right: 20px;
  padding-left: 20px;
  text-indent: 1em;
  text-align: left;
}
section div img {
  margin-right: auto;
  margin-left: auto;
}
.text1 {
  line-height: 1.8;
}
.text1 .desc1 {
  height: 2em;
  overflow: hidden;
}
.text2 {
  line-height: 1.8;
}
.text2 .desc2 {
  height: 2em;
  overflow: hidden;
}
.iconfont {
  width: 100%;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}

.button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}
a {
  background-color: #eee;
  padding: 10px;
  color: black;
  text-decoration: none;
}
.dropdown1-content,
.dropdown2-content,
.dropdown3-content {
  display: none;
  z-index: 1;
}
.show {
  display: block;
}
footer {
  margin-top: 30px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: #716d6d;
  flex-direction: column;
  font-size: 0.7em;
}

.container {
  background-color: #959191;
  border: 1px solid white;
  width: 70vw;
  margin: 20px;
}

footer p {
  padding-right: 20px;
  padding-left: 20px;
  text-indent: 1em;
  text-align: left;
}
.footer-p {
  color: white;
  margin: 5px 0px;
}
.end {
  margin-bottom: 10px;
}

.fullimg {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
}
</style>
