<template>
  <div>
    <div class="headbox">
      <div @click="show = !show" class="dwbox" id="dwbox">
        <img src="@/assets/dw.png" class="dwicon">
        <div>{{selectedcityname}}</div>
      </div>
      <div class="title">影像报告查询</div>
      <!-- <div class="quitbox">
        <img src="@/assets/退出.png" class="quit">
      </div>-->
    </div>
    <transition name="fade">
      <div class="city" id="city" v-if="show">
        <select v-model="prov">
          <option v-for="(option,index) in arr" :key="index" :value="option.name">{{ option.name }}</option>
        </select>
        <select v-model="city">
          <option
            v-for="(option,index) in cityArr"
            :key="index"
            :value="option.name"
          >{{ option.name }}</option>
        </select>
      </div>
    </transition>
  </div>
</template>

<script>
var arrAll = [
  {
    name: "选择省份",
    sub: [{ name: "请选择" }],
    type: 1
  },
  {
    name: "浙江",
    sub: [
      { name: "请选择", sub: [] },
      {
        name: "杭州",
        type: 0
      },
      {
        name: "宁波",
        type: 0
      },
      {
        name: "温州",
        type: 0
      },
      {
        name: "嘉兴",
        type: 0
      },
      {
        name: "湖州",
        type: 0
      },
      {
        name: "绍兴",
        type: 0
      },
      {
        name: "金华",
        type: 0
      },
      {
        name: "衢州",
        type: 0
      },
      {
        name: "舟山",
        type: 0
      },
      {
        name: "台州",
        type: 0
      },
      {
        name: "丽水",
        type: 0
      }
    ],
    type: 1
  } //浙江
];
export default {
  name: "Header",
  data() {
    return {
      show: true,
      arr: arrAll,
      prov: "浙江",
      city: "请选择",
      cityArr: [],
      cityname: ""
    };
  },
  methods: {
    dropdown() {
      this.show = !this.show;
    },
    updateCity: function() {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name == this.prov) {
          this.cityArr = obj.sub;
          break;
        }
      }
      this.city = this.cityArr[0].name;
    },
    updateDistrict: function() {
      if (this.show === true) {
        this.show = !this.show;
      }
    },
    selectcity: function() {
      this.$store.commit("selectcity", this.city);
    }
  },
  beforeMount: function() {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function() {
      this.updateCity();
    },
    city: function() {
      this.updateDistrict();
      this.selectcity();
    }
  },
  computed: {
    selectedcityname() {
      return this.$store.state.selectedcityname;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
.dwbox {
  width: 30%;
  display: inline-block;
  position: absolute;
  left: 1%;
  z-index: 5;
}
.dwicon {
  float: left;
  display: block;
  width: 1.5em;
  height: 1.5em;
}
/* .quit {
  display: block;
  width: 1.5em;
  height: 1.5em;
} */
.quitbox {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.dwbox div {
  float: left;
  font-size: 0.9rem;
  margin-top: 10px;
}
.city {
  background: #41b883;
  width: 100vw;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
}
.title {
  font-size: 20px;
  font-family: "黑体";
}
select {
  margin: 0 10px;
  font-family: "微软雅黑";
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  color: white;
  text-align: center;
  border: 1px #e7e6e6 solid;
  border-radius: 5px;
}
option {
  color: white;
  background: #41b883;
  line-height: 20px;
}
select:focus {
  border: 2px #ddd solid;
  box-shadow: 0 0 15px 1px #dddddd;
}
option:hover {
  background: #ebccd1;
}
</style>
