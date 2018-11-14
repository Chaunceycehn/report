import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
    state: {
        // 放置初始状态 app启动的时候的全局的初始值
        selectedcityname: '地区',
        starttime: '',
        endtime: '',
        telephonenum:'',
        allreport:{},
    },
    mutations: {
        selectcity(state, msg) {
            state.selectedcityname = msg;
        },
        selectstarttime(state, msg) {
            state.starttime = msg;
        },
        selectendtime(state, msg) {
            state.endtime = msg;
        },
        getmyreport(state, msg) {
            state.allreport = msg;
        },
        gettelephonenum(state, msg) {
            state.telephonenum = msg;
        },

    }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store