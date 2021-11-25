import { firebase, googleAuthProvider } from "../Firebase/Config-firebase";
import { Types } from "../Types/Types";

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => alert(err));
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });
        dispatch(login(user.uid, user.displayName));
        alert("Success register!!!");
      })
      .catch((err) => alert(err));
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        alert("Success Login!!!");
      })
      .catch((err) => alert(err));
  };
};

export const login = (uid, displayName) => {
  return { type: Types.login, payload: { uid, displayName } };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: Types.logout,
    });
  };
};
