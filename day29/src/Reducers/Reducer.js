const weatherReducer = (state=[] ,action) => {

        if(action.type === "GET_CITY")
        {
            return [...state,action.payload];
        }
        else{
            return state;
        }
}

export default weatherReducer;