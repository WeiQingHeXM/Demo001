import jsCookie from "js-cookie"

export default{
    state:{
        token:''
    },
    mutations:{
        setToken(state,val){
         state.token = val
         jsCookie.set('token',val)
        },
        clearToken(state){
            state.token = ''
            jsCookie.remove('token')
        },
        getToken(state){
            state.token = state.token || jsCookie.get('token')    
        }
    }
}