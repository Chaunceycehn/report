<template>
    <div class="personal_info of">
        <div class="fl personal_head" id="img_id">
            <img src="http://kyapp.webris.cn/KyDemo/images/patient_girl.png" width="72px" height="72px"/>
        </div>
        <div class="fr personal_info_detail">
            <div class="of pinfo_div">
                <span class="fl">{{name}}</span>
                <span class="fl if_female">
                    <img class="img-circle" id="img_female" src="http://kyapp.webris.cn/KyDemo/images/girl.png" width="12px" />
                </span>
                <span class="fl age">{{age}}</span>
            </div>
            <div class="of font_size15">联系电话：{{number}}</div>
            <div class="of font_size15">家庭住址：{{address}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"userinfo",
    data(){
        return{
            name:"刘*玲",
            gender:"female",
            age:"33",
            number:"134*****789",
            address:"**市幸福小区"
        }
    },
    methods:{
        getData(){
            //
        }
    }
};
</script>


<style scoped>
.personal_info {
    font-size: 14px;
    background: #00be9c;
    width: 100%;
    color: #fff;
    background: linear-gradient(45deg, #00be9c, rgba(0, 190, 156, 0.6));
}
.personal_head{
    margin:15px 0px 15px 20px;
    border-radius: 50%;
}
.personal_info_detail {
    margin-top: 3px;
    margin-left: 15px;
    width: 59%;
}
.personal_info_detail >div:nth-child(1){ font-size:20px;}
.if_female {margin:0px 20px;}
.age  {margin:2px 0px;}
.personal_info_detail >div{margin:10px 0px}

</style>
