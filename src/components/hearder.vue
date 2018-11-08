<template>
  <div>
    <div class="headbox">
      <div class="dwbox" id="dwbox">
        <img src="@/assets/dw.png" class="dwicon">
        <div id="selecedcity">{{selecedcity}}</div>
      </div>
      <div class="title">影像报告查询</div>
    </div>
    <div class="city" id="city">
      <select class="form-control" style="width:100px;" id="s_province" name="s_province"></select>
      <select class="form-control" id="s_city" name="s_city" onChange="Dispay();"></select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return{
      selecedcity:'地区'
    }
  },
  methods() {},
  computed() {}
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
</style>
