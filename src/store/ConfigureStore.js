import { createStore } from "redux";
import { productReducer } from "../reducers/productReducer";

const ConfigureStore = () => {
    const store = createStore(productReducer)
    return (store);
}

export default ConfigureStore;