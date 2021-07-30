import {weatherReducer} from './Reducer'
import {combinerReducer} from 'redux';

const rootWeatherReducer = combinerReducer({
    weatherReducer : weatherReducer
})   

export default rootWeatherReducer;