<template>
<div>
    <div class="dropdown">
        <div @click="clickfuntion" class="dropbtn">报告解读</div>
        <div v-show="show" id="myDropdown" class="dropdown-content">
            <div class="item" onclick="read()">
                <div class="baogaojieduimgbox">
                    <ul id="text1" style="padding:0 10px;margin-bottom: 0;">
                        <li>报告里的词都看不懂？</li>
                        <li>想知道报告说的病情严不严重？</li>
                        <li>——仅需<span style="font-size: 18px;color:#F1454D">10</span>元，为您解读报告，帮您了解病情</li>
                    </ul>
                    <div style=" font-size:12px;padding-left:10px;"><span style="padding-right:10px;"><b style="color:#F59202;">√</b>
                            快速回电</span><span><b style="color:#F59202;">√</b> 讲解清楚报告词汇与内容</span></div>
                </div>
                <div class="blk-1x"></div>
                <a href="#" data-toggle="modal" class="btn btn-primary btn-block">10元解读报告</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "bind",
  data() {
    return {
        show:true,
    };
  },
  methods: {
    clickfuntion(){
        if(this.show == true)
            {this.show = false}
        else(this.show=true)
    }
  }
};
</script>

<style scoped>
.dropbtn {
    background:#eafefb;
    padding: 7px 10px;
    color: #0fcaa8;
    border-radius: 5px;
    border: 1px solid #c2f1e9;
}

.dropbtn:hover{
    background-color: #c6e7dd;

}

.dropbtn:focus {
    background-color: #c6e7dd;
}

.dropdown-content {

}

</style>
