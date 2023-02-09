const initialState = {
  userName: "",
  userAccountType: "",
  userId: "",
};

export function changeUserName(user_name) {
  return {
    type: "CHANGE_USER_NAME",
    payload: user_name,
  };
}

export function changeUserAccountType(user_account_type) {
  return {
    type: "CHANGE_USER_ACCOUNT_TYPE",
    payload: user_account_type,
  };
}

export function changeUserId(user_id) {
  return {
    type: "CHANGE_USER_ID",
    payload: user_id,
  };
}

export default function userDataReducer(userData = initialState, action) {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      return {
        ...userData,
        userName: action.payload,
      };
    case "CHANGE_USER_ACCOUNT_TYPE":
      return {
        ...userData,
        userAccountType: action.payload,
      };
    case "CHANGE_USER_ID":
      return {
        ...userData,
        userId: action.payload,
      };
    default:
      return userData;
  }
}
