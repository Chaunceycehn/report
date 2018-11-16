import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
    state: {
        // 放置初始状态 app启动的时候的全局的初始值
        selectedcityname: '温州',
        starttime: '请输入起始时间',
        endtime: '请输入结束时间',
        telephonenum: '',
        allreport: [],
        reportdetail: {},
    },
    mutations: {
        selectcity(state, msg) {
            state.selectedcityname = msg;
            window.localStorage.setItem('selectedcityname', msg);
        },
        selectstarttime(state, msg) {
            state.starttime = msg;
            window.localStorage.setItem('starttime', msg);
        },
        selectendtime(state, msg) {
            state.endtime = msg;
            window.localStorage.setItem('endtime', msg);
        },
        getmyreport(state, msg) {
            state.allreport = msg;
            window.localStorage.setItem('allreport', JSON.stringify(msg));
        },
        gettelephonenum(state, msg) {
            state.telephonenum = msg;
            window.localStorage.setItem('telephonenum', msg);
        },
        getreportdetail(state, msg) {
            state.reportdetail = msg;
            window.localStorage.setItem('reportdetail', JSON.stringify(msg));
        },

    }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store