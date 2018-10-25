import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    
    userName: {},
getData:[],
    
}
export default (state= INITIAL_STATE,action)=>{
    switch(action.type){
   case ActionTypes.USERNAME:
   return({
       ...state,
       userName:action.payload.userName,
   })
   case ActionTypes.SINGIN:
   return({
       ...state,
       signData:action.payload.signData,
   })
   case ActionTypes.SignOut:
            return ({
                ...state,
               signData:[]
            })
                case ActionTypes.getData:
                console.log(action.payload,'payload');
                return({
                    ...state,
                    getData:state.getData.concat(action.payload)
                })
                console.log(state);
   default:
   return state;
   }
}  