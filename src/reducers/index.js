
import {combineReducers} from 'redux'
import sampleReducer from './sampleReducer'

//state.templateReducer.count
let rootReducer = combineReducers({
    templateReducer: sampleReducer
})

export default rootReducer