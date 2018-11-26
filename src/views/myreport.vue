<template>
  <div class="myreport">
    <allreport></allreport>
    <nav class="tab">
      <router-link class="tab_btn selected" to="/">查询影像</router-link>
      <router-link class="tab_btn" to="/myreport">我的影像/报告</router-link>
    </nav>
  </div>
</template>
<script>
import allreport from "@/components/allreport.vue";
export default {
  name: "myreport",
  components: {
    allreport
  }
};
</script>
