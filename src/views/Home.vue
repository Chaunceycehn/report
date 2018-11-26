<template>
  <div class="home">
    <hearder/>
    <bodyMain/>
    <toast/>
    <nav class="tab">
      <router-link class="tab_btn selected" to="/">查询影像</router-link>
      <router-link class="tab_btn" to="/myreport">我的影像/报告</router-link>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import bodyMain from "@/components/main.vue";
import Hearder from "@/components/hearder.vue";
import toast from "@/components/toast/toast.vue";
// import test from "@/components/test.vue";

export default {
  name: "home",
  components: {
    bodyMain,
    Hearder,
    toast
  },
  data() {
    return {
      isActive: true
    };
  }
  // computed: {
  //   currentTabComponent: function() {
  //     return "tab-" + this.currentTab.toLowerCase();
  //   }
  // },
};
</script>

<style scoped>
</style>

