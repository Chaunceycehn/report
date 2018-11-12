<template>
  <div class="home">
    <hearder/>
    <bodyMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import bodyMain from "@/components/main.vue";
import Hearder from "@/components/hearder.vue";

export default {
  name: "home",
  components: {
    bodyMain,
    Hearder
  },
  data() {
    return {
      isActive: true,
    };
  },
  // computed: {
  //   currentTabComponent: function() {
  //     return "tab-" + this.currentTab.toLowerCase();
  //   }
  // },


};
</script>

<style scoped>
</style>

