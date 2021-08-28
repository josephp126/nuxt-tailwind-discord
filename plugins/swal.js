import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

export default function (ctx, inject) {


    Vue.use(VueSweetalert2);
    inject('swal', Vue.swal)

}