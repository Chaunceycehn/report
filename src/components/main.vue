<template>
  <div class="tab_box">
    <ul class="patientinput">
      <li>
        <span class="tit">起始日期</span>
        <div id="targetContainer1"></div>
        <datepicker v-on:input="selectstarttime" :time="starttime"></datepicker>
      </li>
      <li>
        <span class="tit">结束日期</span>
        <div id="targetContainer2"></div>
        <datepicker v-on:input="selectendtime" :time="endtime"></datepicker>
      </li>
      <li>
        <span class="tit">手机号码</span>
        <input type="text" value="" class="text" placeholder="请输入手机号码">
      </li>
      <li>
        <span class="tit">验证码</span>
        <input type="text" value="" class="text" placeholder="请输入验证码">
        <span class="btn" id="btn" value="发送验证码" v-if="show" @click="getCode">获取验证码</span>
        <span class="dactive" id="btn" value="发送验证码" v-if="!show">{{count}} s</span>
      </li>
    </ul>
    <div class="Advisory">
      <span>点击查询</span>
    </div>
  </div>
</template>

<script>
import datepicker from "@/components/datepicker.vue";

export default {
  name: "HelloWorld",
  components: {
    datepicker
  },
  data() {
    return {
      show: true,
      count: "",
      timer: null
    };
  },
  props: {
    msg: String
  },
  methods: {
    selectstarttime: function(data) {
      this.$store.commit("selectstarttime", data);
    },
    selectendtime: function(data) {
      this.$store.commit("selectendtime", data);
    },
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  },
  computed: {
    starttime() {
      return this.$store.state.starttime;
    },
    endtime() {
      return this.$store.state.endtime;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab_box {
  padding-bottom: 5px;
  display: block;
  width: 100vw;
}
.patientinput {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.patientinput li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  line-height: 44px;
}
.patientinput .tit {
  font-size: 1rem;
}
.targetContainer1 {
  position: absolute;
}
.btn {
  width: 25vw;
  text-align: center;
  display: inline-block;
  position: absolute;
  right: 3%;
  padding: 0 5px;
  height: 3rem;
  line-height: 3rem;
  font-size: 12px;
  color: white;
  background: #00a08a;
  outline: none;
  border-radius: 0;
  border: 0;
}
.btn:hover {
  background: #18836a;
}
.btn:active {
  background: #18836a;
}
.btn.current {
  background: #b1b1b1;
}
.dactive{
  width: 25vw;
  text-align: center;
  display: inline-block;
  position: absolute;
  right: 3%;
  padding: 0 5px;
  height: 3rem;
  line-height: 3rem;
  font-size: 12px;
  color: white;
  outline: none;
  border-radius: 0;
  border: 0;
  background: #b1b1b1;
}
input {
  padding-left: 10px;
  background: none;
  outline: none;
  border: 0px;
  width: 70vw;
}
input:focus {
  outline: none;
}
input {
  font-size: 1rem;
  height: 3rem;
  border-radius: 4px;
  border: 1px solid #c8cccf;
  color: #6a6f77;
  position: relative;
}
.Advisory {
  font-size: 14px;
  width: 80vw;
  padding: 10px;
  margin: 20px 0;
  background-color: #00a08a;
  color: white;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}
.Advisory:hover {
  background: #18836a;
}
.Advisory:active {
  background: #18836a;
}
</style>
