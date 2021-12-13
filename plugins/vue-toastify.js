import Vue from "vue";
import VueToastify from "vue-toastify";

Vue.use(VueToastify,{
	position: "bottom-center",
	withBackdrop: false,
	theme: "toasted",
	iconEnabled: false,
});