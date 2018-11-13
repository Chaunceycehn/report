<template>
  <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>
<script>
export default {
    data(){
        return{
            showWrap:'',
            showContent:''
        }
    }
}
</script>


<style scoped>
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    width: 70%;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
  }
  .fadein {
    animation: animate_in 0.25s;
  }
  .fadeout {
    animation: animate_out 0.25s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
