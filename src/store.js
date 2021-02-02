import {createStore} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducers/index"
//*Finally we assign a variable to the createStore method and pass our reducers inside as arguments
//* Also passed composeWithDevTools to be able to use the redux devtools extension on chrome
export const store = createStore(rootReducer,devToolsEnhancer())
