<template>
  <div class="tab_box">
    <ul class="patientinput">
      <li>
        <span class="tit">起始日期</span>
        <div id="targetContainer1"></div>
        <input
          type="text"
          value=""
          class="text checkdata1"
          placeholder="选择起始时间"
          id="date-selector-input1"
          readonly
        >
      </li>
      <li>
        <span class="tit">结束日期</span>
        <div id="targetContainer2"></div>
        <input
          type="text"
          value=""
          class="text checkdata2"
          placeholder="选择结束时间"
          id="date-selector-input2"
          readonly
        >
      </li>
      <li>
        <span class="tit">手机号码</span>
        <input type="text" value="" class="text" placeholder="请输入手机号码">
      </li>
      <li>
        <span class="tit">验证码</span>
        <input type="text" value="" class="text" placeholder="请输入验证码">
        <button class="btn btnCur2" id="btn" value="发送验证码">发送验证码</button>
        <!-- <div class="sameBtn btnCur2">发送验证码</div> -->
      </li>
    </ul>
    <div class="Advisory">
      <span>点击查询</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab_box { padding-bottom: 5px; display: block; width: 100vw; } 
.patientinput { display: flex; flex-direction: column; width: 100vw; } 
.patientinput li { display: flex; flex-direction: row; justify-content: space-between; padding: 10px; text-align:center; line-height:44px; } 
.patientinput .tit {font-size: 1rem;}
.targetContainer1 { position: absolute; } 
.btn {width: 25vw;text-align: center; display: inline-block; position: absolute; right: 3%; padding: 0 5px; height: 3rem; line-height: 14px; font-size: 12px; color: white; background: #00A08A; outline: none; border-radius: 0; border:0; } 
.btn:hover { background: #18836a; } 
.btn:active { background: #18836a; } 
.btn.current{background: #b1b1b1;}
input { padding-left: 10px; background:none; outline:none; border:0px; width: 70vw; } 
input:focus { outline: none; } 
input { font-size:1rem; height:3rem; border-radius:4px; border:1px solid #c8cccf; color:#6a6f77; position: relative; } 
.Advisory { font-size: 14px; width: 80vw; padding: 10px; margin:20px 0; background-color: #00A08A; color: white; display: flex; justify-content: center; margin-right: auto; margin-left: auto; } 
.Advisory:hover { background: #18836a; } 
.Advisory:active { background: #18836a; } 

</style>
