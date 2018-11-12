<template>
        <div class="dropdown">
            <div @click="clickfuntion" class="dropbtn">咨询国内医生</div>
            <div v-show="show" id="myDropdown1" class="dropdown-content">
                <div class="body" style="display: block;">
                    <div class="item" onclick="ask()">
                        <div class="zixunimgbox">
                            <div class="item-list" style="margin-bottom:10px;">
                                                                <span style="color:white;font-weight: 700;padding:2px;overflow: hidden;display:block;padding-left: 8px;">获得疾病确认结果+疾病治疗方向</span>
                                <div style="padding-top:8px;"><span style="width: 50%;text-align: center;display: inline-block;font-size:0.8em;"><b
                                            style="color:#E68E8E;">1. </b>疾病咨询结果</span><span style="width: 50%;text-align: center;display: inline-block;font-size:0.8em;"><b
                                            style="color:#E68E8E;">2. </b>疾病治疗方向</span></div>
                                <div><span style="width: 50%;text-align: center;display: inline-block;font-size:0.8em;"><b
                                            style="color:#E68E8E;">3. </b>疾病注意事项</span><span style="width: 50%;text-align: center;display: inline-block;font-size:0.8em;"><b
                                            style="color:#E68E8E;">4. </b>今后康复建议</span></div>
                            </div>
                            <div class="item-list" style="margin-bottom:10px;">
                                                              <span style="color: white;font-weight: 700;padding:2px;overflow: hidden;display:block;padding-left: 8px;">北京、郑州影像科医生本人写报告</span>
                                <div style="padding-top:8px;padding-left: 25px;"><span style="text-align: center;display: inline-block;font-size:0.6em;"><i
                                            class="icon-i-star" style="color:#E68E8E;margin-right:5px;"></i>
                                        报告均附带医生本人签名</span><span style="text-align: center;display: inline-block;font-size:0.6em;"><i
                                            class="icon-i-star" style="color:#E68E8E;margin-right:5px;"></i>
                                        支持面见医生复验报告内容真实性</span></div>
                            </div>
                            <div class="item-list" style="margin-bottom:10px;">
                                                            <span style="color: white;font-weight: 700;padding:2px;overflow: hidden;display:block;padding-left: 8px;">一键发起咨询，无需上传或邮寄胶片</span>

                            </div>
                        </div>
                        <div class="blk-1x"></div>
                        <a href="#" data-toggle="modal" class="btn btn-primary btn-block">1折咨询医生</a>

                        <div class="body" style="margin-left: 0px; margin-top: 15px; display: none;" id="historyReportConfirmList">
                        </div>
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
    margin-bottom: 20px;
}

</style>
