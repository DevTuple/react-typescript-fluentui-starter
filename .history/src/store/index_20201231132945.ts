import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  const reducers = combineReducers(
    {
       }
  );
  
  const storedUser:any = localStorage.getItem("USER");
  const store = createStore(
    reducers,
    {
      user: JSON.parse(storedUser) || {},
      auth: { login: {}, signup: {}, logged_in: {} },
      data: {
        lists: {
          center_list: {},
          users_list_profile: {},
          centeruserslist: {},
          entityList: [],
          messageList: [],
          appWorkspaceList: [],
        },
      },
      current: {
        currentcenter: {},
        currentuser: {},
        currentEntity: {},
        currentAppworkspace: {},
        currentlyRegisteringPatient: {},
        currentIncident: {},
        currentMessageDetails: {
          sendingmessage: false,
          messageText: "",
          messageType: "",
        },
      },

      center: "",
    },
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  return store;
};
