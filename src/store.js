import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
var CryptoJS = require("crypto-js");

function Encrypt(message) {
    return CryptoJS.AES.encrypt(`${message}`, "secret key 123").toString();
}
// function Decrypt(ciphertext) {
//     var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
//     return bytes.toString(CryptoJS.enc.Utf8);
// }

const store = new Vuex.Store({
    state: {
        // 放置初始状态 app启动的时候的全局的初始值
        selectedcityname: '温州',
        starttime: '',
        endtime: '',
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
            // // state.allreport = msg;
            // console.log(Encrypt(JSON.stringify(msg)));
            // console.log(Decrypt(Encrypt(JSON.stringify(msg))));

            state.allreport = Encrypt(JSON.stringify(msg));
            window.localStorage.setItem('allreport', Encrypt(JSON.stringify(msg)));
        },
        gettelephonenum(state, msg) {
            state.telephonenum = Encrypt(msg);
            window.localStorage.setItem('telephonenum', Encrypt(msg));

        },
        getreportdetail(state, msg) {
            state.reportdetail = Encrypt(JSON.stringify(msg));
            window.localStorage.setItem('reportdetail', Encrypt(JSON.stringify(msg)));
        },

    }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store