import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";


export default () => {
  const reducers = combineReducers(
    {authReducer,
    centerreducer,
    centeruserReducer,
    incidentReducer,
    entityReducer,
    appWorkspaceReducer,
    messagereducer,
    userreducer,
    userslistreducer}
  );
  const devTool =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const storedUser = localStorage.getItem("USER");
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
    compose(applyMiddleware(thunk, logger), devTool)
  );
  return store;
};
