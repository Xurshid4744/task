import { USER_REGISTRATION_ERROR, USER_REGISTRATION_LOADING, USER_REGISTRATION_SUCCESS } from "./type";

  interface Dispatch{
    type:string,
    payload:[]
  }
  const initialState = {
    data: [],
    loading: true,
    error: null,
  };
  
  export const userRegistration = (state = initialState, { type, payload }:Dispatch) => {
    switch (type) {
      case USER_REGISTRATION_LOADING:
        return { ...state, loading: true };
      case USER_REGISTRATION_SUCCESS:
        return { ...state, loading: false, data: payload };
      case USER_REGISTRATION_ERROR:
        return { ...state, loading: false, error: payload };
      default:
        return state;
    }
  };
  
