<template>
  <div class="bind">
    <section>
      <div class="bind_li">
        <ul class="liclomn">
          <ul class="lirow">
            <li class="sub_title lirow_l">&nbsp;&nbsp; 影像号码:{{report.AccessNo}}</li>
            <li class="sub_title lirow_l">&nbsp;&nbsp; 检查设备:{{report.Modality}}</li>
          </ul>
          <li class="sub_title">&nbsp;&nbsp; 检查时间:{{report.reportdate}}</li>
          <li class="sub_title Dengjipart">&nbsp;&nbsp; 检查部位:{{report.Dengjipart}}</li>
          <li class="sub_title">&nbsp;&nbsp; 检查医院:{{report.Hospital_Name}}</li>
        </ul>
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
      let localData = JSON.parse(window.localStorage.getItem("reportdetail"));
      if (!this.$store.reportdetail && localData) {
        this.$store.commit("getreportdetail", localData); //同步操作
      }
      return this.$store.state.reportdetail;
    }
  },
  beforeMount() {
    this.renderreport();
  },
  mounted() {
    // console.log(this.report);
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

  margin: 5px 20px;
}
.lirow_l {
  margin-top: 5px;
  margin-bottom: 0px;
}
.Dengjipart {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lirow {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
