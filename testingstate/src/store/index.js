import {createStore} from 'vuex'
import actions from './actions';    
import mutations from './mutations';
import getters from './getters';
import state from './state';
const store = createStore({
    state,
    getters,
    mutations,
    actions
})
export default store;