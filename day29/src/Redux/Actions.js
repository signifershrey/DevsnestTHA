import { GET_CITY,GET_API_DATA } from "./ActionTypes";

export const get_city = (city) => {

    return {
        type: GET_CITY,
        payload:city
    }
}

