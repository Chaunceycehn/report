<template>
  <div class="bind">
    <section class="bind_li">
      <div class="of info_div_1">
        <table class="tb_class fl">
          <tbody>
            <tr>
              <td class="fl sub_title">&nbsp;&nbsp; 影像号码:{{report.AccessNo}}</td>
              <td class="r1 sub_title">&nbsp;&nbsp; 检查时间:{{report.reportdate}}</td>
            </tr>
            <tr>
              <td class="fl sub_title">&nbsp;&nbsp; 检查设备:</td>
              <td class="r2 sub_title">&nbsp;&nbsp; 检查部位:{{report.Dengjipart}}</td>
            </tr>
            <tr>
              <td class="sub_title" colspan="2">&nbsp;&nbsp; 检查医院:{{report.Hospital_Name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="bind_li">
      <div class="title">
        <img src="http://kyapp.webris.cn/KyDemo/images/li_ico1.png" class="li_ico1 fl" width="3px">
        <h2>影像所见：</h2>
      </div>
      <p id="P1">{{report.reportinfo}}</p>
      <div class="clear"></div>
    </section>
    <section class="bind_li">
      <div class="title">
        <img src="http://kyapp.webris.cn/KyDemo/images/li_ico1.png" class="li_ico1 fl" width="3px">
        <h2>诊断结果：</h2>
      </div>
      <p id="P2">{{report.reportend}}</p>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "bind",
  data() {
    return {
      report: {}
    };
  },
  methods: {
    renderreport() {
      this.report = this.reportdetail;
    }
  },
  computed: {
    reportdetail() {
      return this.$store.state.reportdetail;
    }
  },
  beforeMount() {
    this.renderreport();
  },
  mounted() {
    console.log(this.report);
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
.tb_class{
font-size: 0.7rem;
}
tr {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sub_title {
  background: url(http://kyapp.webris.cn/KyDemo/images/result_li.png) no-repeat
    left center;
}
.r1 {
  position: absolute;
  left: 50%;
}
.r2 {
  position: absolute;
  left: 50%;
}
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
