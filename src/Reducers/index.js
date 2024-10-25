import { combineReducers } from "redux";
import tablereducer from "./tablereducer";
import orderreducer from "./orderreducer";

const reducer = combineReducers({
    tablereducer:tablereducer,
    orderreducer:orderreducer
})

export default reducer;