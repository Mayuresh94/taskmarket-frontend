import { LOGIN, LOGOUT, ERROR } from "./GetUserActions";
import { httpGet } from "../api/http/GetRequest";
import URLMapping from "../api/URLMapping";

export default function GetUserService() {
  return async (dispatch) => {
    await httpGet(URLMapping.USER_SHOW)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            dispatch({ type: LOGIN, user: json });
          });
        } else if (response.status === 401) {
          dispatch({ type: LOGOUT });
        } else {
          throw new URIError("Failed to load user info");
        }
      })
      .catch((error) => {
        dispatch({ type: ERROR, message: error.message });
      });
  };
}
