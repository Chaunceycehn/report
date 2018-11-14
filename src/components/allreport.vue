<template>
  <div class="tab_box">
    <div class="headbox">
      <div class="title">我的影像/报告</div>
    </div>
    <!-- <ul class="MyReport">
      <router-link to="/reportdetail" tag="li">
        <img src="@/assets/ct.png" alt="">
        <div>
          <span>平阳县人民医院</span>
          <span>扫描部位：颅脑平扫,颔面部平</span>
          <span>检查日期: 2018-02-19</span>
        </div>
      </router-link>
    </ul>-->
    <div class="lists">
      <ul>
        <li
          class="list"
          v-for="(list,index) in lists"
          :key="index"
          @click="gotodetail(list.AccessNo)"
        >
          <div class="first" v-bind:style="{'background-color':setStyle}"></div>
          <div class="middle">
            <span class="hospital">{{list.Hospital_Name}}</span>
            <div class="subtitle">
              <span class="Dengjipart">部位：{{list.Dengjipart}}</span>
              <span class="reportend">报告内容：{{list.reportend}}</span>
            </div>
          </div>
          <div class="end">
            <img src="@/assets/箭头.png">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
      colors: [
        ["#efb04e"],
        ["#e672a2"],
        ["#f2eb67"],
        ["#d15a39"],
        ["#d0d25c"],
        ["#5591d2"]
      ]
    };
  },
  methods: {
    renderlist() {
      this.lists = this.reportdata;
    },
    gotodetail(accessno) {
      this.$http({
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // transformRequest: [data => this.$qs.stringify(data)],
        method: "post",
        url: "/AjaxTest/TestMethod.ashx",
        data: this.$qs.stringify({
          param: `{     "method": "GetReportDetails",     "accessno": "${accessno}" }`
        })
      })
        .then(response => {
          console.log(accessno);
          console.log(response.data.data[0]);
          this.$store.commit("getreportdetail", response.data.data[0]);
          this.$router.push({ path: "/reportdetail" });
        })
        .catch(error => {
          this.showToast(error);
        });

      
    }
  },
  computed: {
    reportdata() {
      return this.$store.state.allreport;
    },
    setStyle: function() {
      return this.colors[Math.floor(Math.random() * 6)];
    }
  },
  beforeMount() {
    this.renderlist();
  }
};
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
  display: block;
  width: 100vw;
}

.list {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 11px;
}
.first {
  height: 70px;
  width: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.middle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.end {
  height: 70px;
  width: 40px;
  background-color: #41b883;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.end > img {
  height: 30px;
}
.hospital {
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
}
.subtitle {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
  font-size: 15px;
}
.Dengjipart {
  margin-right: 20px;
}

.lists:last-child {
  margin-bottom: 40px;
}
.lists:hover {
  background-color: #e7e6e6;
}
.lists:active {
  background-color: #e7e6e6;
}
</style>
