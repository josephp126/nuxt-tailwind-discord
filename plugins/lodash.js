import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

export default function(ctx, inject) {

Vue.use(VueLodash, { lodash })
inject("_", Vue.lodash)

}