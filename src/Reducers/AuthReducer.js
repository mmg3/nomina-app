import { Types } from "../Types/Types";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case Types.login:
      return action.payload;

    case Types.logout:
      return {};

    default:
      return { state };
  }
};
