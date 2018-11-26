<template>
  <div class="dropdown">
    <div class="of info_div zk" @click="clickfuntion">
      <div class="fl main_shu"></div>
      <div class="fl main_title">
        <span>相关检查</span>
      </div>
      <div class="fr look_all">
        <span>查看全部</span>
        <img src="../../assets/zk.png" :class="{img2:true,rotate:true}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bind",
  data() {
    return {
      show: true
    };
  },
  methods: {
    clickfuntion() {
      if (this.show == true) {
        this.show = false;
      } else this.show = true;
    }
  }
};
</script>

<style scoped>

.rotate {
  transform: rotate(-90deg);
}
.dropdown {
  border: 1px solid #d3d3d3;
  border-radius: 0.3em;
}
.main_shu {
  width: 1px;
  border: 1.5px solid #00d2c7;
  height: 18px;
  /* border-radius: 2px; */
  height: 1.6em;
  margin: 5px 0px;
}

.main_title {
  font-size: 16px;
  color: #333;
  margin-left: 10px;
}
.look_all {
  font-size: 12px;
  color: #999;
  margin-right: 10px;
}
.box_content {
  padding: 0.3em 0.9em 0.6em 0.9em;
  border-top: 1px solid #e5e5e5;
}

.img2 {
  vertical-align: middle;
  width: 12px;
  margin-bottom: 4px;
  margin-left: 5px;
}
.btnbox2 {
  padding: 0.5em 0;
  text-align: center;
}

.btn2 {
  border: none;
  padding: 7px;
  color: white;
  width: 100%;
  background: linear-gradient(45deg, #00d2c7, rgba(0, 190, 156, 0.6));
  border-radius: 3px;
}

.text1 {
  margin: 5px 0;
}

.info_div {
  color: #666;
  height: 35px;
  line-height: 35px;
}
</style>
