<template>
    <div class="dropdown">
        <div @click="clickfuntion" class="dropbtn">咨询国内医生</div>
        <div v-show="show" id="myDropdown1" class="dropdown-content">
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
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
.dropdown {
  margin-bottom: 40px;
}
.dropbtn:hover {
  background-color: #c6e7dd;
}

.dropbtn:focus {
  background-color: #c6e7dd;
}

.dropdown-content {
  margin-bottom: 20px;
}
</style>
