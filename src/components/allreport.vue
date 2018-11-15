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
    <div class="noreprot" v-if="lists.length==0">
      <img src="@/assets/为空.png" alt="" class="weikong">
      <p>暂无影像报告，请点击立即查询</p>
    </div>
    <div class="lists" v-if="lists.length">
      <ul>
        <li
          class="list"
          v-for="(list,index) in lists"
          :key="index"
          @click="gotodetail(list.AccessNo)"
        >
          <div class="first" v-bind:style="{'background-color':setStyle(index)}"></div>
          <div class="middle">
            <span class="hospital">{{list.Hospital_Name}}</span>
            <div class="subtitle">
              <span class="Name">患者姓名：{{list.Name}}</span>
              <span class="ModCheckDate">检查日期：{{list.ModCheckDate | timecut}}</span>
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
  filters: {
    timecut: function(value) {
      if (!value) return "";
      value = value.split(" ");
      return value[0];
    }
  },
  methods: {
    renderlist() {
      this.lists = this.reportdata;
    },
    setStyle: function(el) {
      if (el > 6) {
        el = el / 6;
      }
      return this.colors[Math.floor(Math.random() * (6 - el))];
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
          // console.log(accessno);
          // console.log(response.data.data[0]);
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
    }
  },
  beforeMount() {
    this.renderlist();
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-family: "黑体"
}
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
  flex-grow: 1;
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
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Dengjipart {
  margin-right: 20px;
}
.weikong {
  width: 30px;
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
.noreprot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
  color: #969696;
}
</style>
