Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @Chaunceycehn Sign out
1
1 0 wannaxiao/vue-slim-popup
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
vue-slim-popup/src/App.vue
8790ff2  10 days ago
 莫海学 feat: props popupClass Array
     
141 lines (125 sloc)  2.65 KB
<template>
  <div id="app">

    <h1>中间弹出</h1>

    <div class="btn-box">
      <button
        v-for="(item, index) in 4"
        :key="index"
        class="open-btn"
        @click="popupShow(index)">Click Me</button>
    </div>

    <SlimPopup
      :show.sync="show"
      :popupTransition="popupTransition"
      :popupClass="['popup']">
      <h2 style="color: #6D7A80;">这里是一个插槽，可以放置任何元素</h2>
      <button class="close-btn" @click="popupHide">X</button>
    </SlimPopup>

    <h1>底部弹出</h1>

    <div class="btn-box">
      <button class="open-btn" @click="show2 = true">Click Me</button>
    </div>

    <SlimPopup
      :show.sync="show2"
      :popupClass="['popup']"
      popupTransition="slim-slide-in-bottom"
      popupPosition="bottom">
      <h2 style="color: #6D7A80;">这里是一个插槽，可以放置任何元素</h2>
      <button class="close-btn" @click="show2 = false">X</button>
    </SlimPopup>

  </div>
</template>

<script>
import SlimPopup from './lib'
export default {
  name: 'App',
  components: {
    SlimPopup,
  },
  data () {
    return {
      show: false,
      show2: false,
      popupTransition: '',
    }
  },
  created () {
    this.transitionList = ['slim-scale', 'slim-zoom', 'slim-fade-in-bottom', 'slim-slide-in-bottom']
  },
  methods: {
    // 显示
    popupShow (index) {
      this.popupTransition = this.transitionList[index] // 更换动效
      this.show = true
    },
    // 隐藏
    popupHide () {
      this.show = false
    },
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px;
$baseColor = #6A9FB5;
$bgColor = #FAFAFA;
* {
  padding: 0;
  margin: 0;
  border: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  > h1 {
    font-size: 24px;
    padding: 0 15px;
    padding-top: 40px;
    padding-bottom: 20px;
    color: #6D7A80;
  }
  .popup {
    width: 80%;
    height: 200px;
    border-radius: 16px;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  .btn-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .open-btn {
      display: block;
      width: 60%;
      height: 100px;
      margin: 15px auto;
      font-size: 24px;
      color: $baseColor;
      background-color: $bgColor;
    }
  }
  .close-btn {
    font-size: 20px;
    font-weight: 500;
    color: $baseColor;
    background-color: $bgColor;
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
}
</style>

