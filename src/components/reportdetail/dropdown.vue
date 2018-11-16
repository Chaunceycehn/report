<template>
    <div>
        <div class="dropdown">
            <div @click="clickfuntion" class="dropbtn">报告解读</div>
            <div v-show="show" id="myDropdown" class="dropdown-content">
                测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测测试测试测试测
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
.dropbtn {
  background: #eafefb;
  padding: 7px 10px;
  color: #0fcaa8;
  border-radius: 5px;
  border: 1px solid #c2f1e9;
}

.dropbtn:hover {
  background-color: #c6e7dd;
}

.dropbtn:focus {
  background-color: #c6e7dd;
}

.dropdown-content {
}
</style>
