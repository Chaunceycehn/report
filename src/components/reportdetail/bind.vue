<template>
    <div class="bind">
        <section class="bind_li">
            <div class="of info_div_1">
                <table class="tb_class fl">
                    <tr>
                        <td class="fl sub_title">&nbsp;&nbsp; 影像号码:{{影像号码}}</td>
                        <td class="r1 sub_title">&nbsp;&nbsp; 检查时间:{{检查时间}}</td>
                    </tr>
                    <tr>
                        <td class="fl sub_title">&nbsp;&nbsp; 检查设备:{{检查设备}}</td>
                        <td class="r2 sub_title">&nbsp;&nbsp; 检查部位:{{检查部位}}</td>
                    </tr>
                    <tr>
                        <td class="sub_title" colspan="2">&nbsp;&nbsp; 检查医院:{{检查医院}}</td>
                    </tr>
                </table>
            </div>
        </section>
    <section class="bind_li">
        <div class="title">
            <img src="http://kyapp.webris.cn/KyDemo/images/li_ico1.png" class="li_ico1 fl" width="3px" />

            <h2> 影像所见：</h2>
        </div>


        <p id="P1">
            L3-4、L4-5、L5-S1椎间盘未见明显突出或膨出，诸椎体及附件骨质无殊，相应层面椎管内未见明显异常。
        </p>

        <div class="clear"></div>
    </section>
    <section class="bind_li">

        <div class="title">
        <img src="http://kyapp.webris.cn/KyDemo/images/li_ico1.png" class="li_ico1 fl" width="3px"/>

        <h2>诊断结果：</h2>
        </div>


        <p id="P2">L3-S1椎间盘CT平扫未见明显异常。</p>

        <div class="clear"></div>
    </section>
    </div>

</template>

<script>
export default {
  name: "bind",
  data() {
    return {
      影像号码: "KAYI01",
      检查时间: "2016-08-22",
      检查设备: "CT",
      检查部位: "脊柱",
      检查医院: "**市第一人民医院"
    };
  },
  methods: {
    getData() {
      //
    }
  }
};
</script>

<style scoped>
.info_div_1 {
  padding: 10px;
  font-size: 13px;
  color: #333;
  line-height: 24px;
}
.bind_li {
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  margin-bottom: 10px;
  margin-top: 10px;
}
.sub_title {
  background: url(http://kyapp.webris.cn/KyDemo/images/result_li.png) no-repeat
    left center;
}
.r1{position: absolute;right: 20px;}
.r2{position: absolute;right: 60px;}
.title {
  margin: 10px 0px;
}
.li_ico1 {
  margin-right: 10px;
}
h2 {
  font-size: 16px;
  font-weight: bold;
}
#P1 {
  padding: 10px;
  font-size: 13px;
  color: #333;
  line-height: 24px;
}
#P2 {
  padding: 10px;
  font-size: 13px;
  color: #333;
  line-height: 24px;
}
</style>
