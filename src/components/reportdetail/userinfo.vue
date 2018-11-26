<template>
  <div class="personal_info of">
    <div class="fl personal_head" id="img_id">
      <img src="http://kyapp.webris.cn/KyDemo/images/patient_girl.png" width="72px" height="72px">
    </div>
    <div class="fl personal_info_detail">
      <div class="of pinfo_div">
        <span class="fl">{{report.Name}}</span>
        <span class="fl if_female">
          <img
            class="img-circle"
            id="img_female"
            src="http://kyapp.webris.cn/KyDemo/images/girl.png"
            width="12px"
          >
        </span>
        <span class="fl age">{{report.Age}}</span>
      </div>
      <div class="of font_size15">联系电话：{{report.Telephone}}</div>
      <div class="of font_size15">家庭住址：{{report.Address}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userinfo",
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
    // console.log(this.report)
  }
};
</script>


<style scoped>
.personal_info {
  font-size: 14px;
  background: #00d2c7;
  width: 100%;
  padding: 15px;
  color: #fff;
  background: linear-gradient(45deg, #00d2c7, rgba(0, 190, 156, 0.6));
}
.personal_head {
  width: 72px;
  height: 72px;
  border-radius: 50%;

}
.personal_info_detail {
  margin-top: 3px;
  margin-left: 15px;
  width: 69%;
}
.personal_info_detail > div:nth-child(1) {
  font-size: 18px;
  margin-bottom: 8px;
}
.if_female {
  margin: 0px 20px;
  width: 5%;
}
.age {
  margin: 2px 0px;
}
.personal_info_detail > div:nth-child(2)  {
  font-size: 15px;
  margin-bottom: 8px;
}
.personal_info_detail > div:nth-child(3)  {
  font-size: 15px;
}
</style>
