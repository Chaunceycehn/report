<template>
  <div class="personal_info of">
    <div class="fl personal_head" id="img_id">
      <img src="../../assets/patient_girl.png" width="72px" height="72px">
    </div>
    <img src="../../assets/关闭.png" class="left" @click="left">
    <div class="fl personal_info_detail">
      <div class="of pinfo_div">
        {{report.Name}}&nbsp;&nbsp;
        <img class="img-circle" id="img_female" src="../../assets/girl.png">
        &nbsp;&nbsp;{{report.Age}}
      </div>
      <div class="of font_size15">联系电话：{{report.Telephone}}</div>
      <div class="of font_size15">家庭住址：{{report.Address}}</div>
    </div>
  </div>
</template>

<script>
var CryptoJS = require("crypto-js");

export default {
  name: "userinfo",
  data() {
    return {
      report: {}
    };
  },
  methods: {
    Encrypt(message) {
      return CryptoJS.AES.encrypt(message, "secret key 123").toString();
    },
    Decrypt(ciphertext) {
      var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    renderreport() {
      this.report = this.reportdetail;
    },
    left() {
      this.$router.push({ path: "/myreport" });
    }
  },
  computed: {
    reportdetail() {
      let localData = JSON.parse(
        this.Decrypt(window.localStorage.getItem("reportdetail"))
      );
      if (!this.$store.reportdetail && localData) {
        this.$store.commit("getreportdetail", localData); //同步操作
      }
      return JSON.parse(this.Decrypt(this.$store.state.reportdetail));
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
.img-circle {
  vertical-align: middle;
  width: 15px;
}
.left {
  position: absolute;
  width: 20px;
  right: 20px;
  top: 20px;
}
.personal_info {
  position: relative;
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
  margin-left: 10px;
}
.personal_info_detail {
  margin-top: 3px;
  margin-left: 5px;
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
.personal_info_detail > div:nth-child(2) {
  font-size: 15px;
  margin-bottom: 8px;
}
.personal_info_detail > div:nth-child(3) {
  font-size: 15px;
}
</style>
