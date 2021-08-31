import { ActionType } from "../constants/action-types"

const initialstate = {
    products :[{
        id:1,
        title:"Shrey",
        category: "developer"
    },
],
}

export const productReducer = () => (state , {type,payload}) => {
    switch(type){
        case ActionType.SET_PRODUCTS : 
            return state;
        default:
            return  state;
    }
}