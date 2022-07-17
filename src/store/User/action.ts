import { registration } from "./api";
import {
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESS,
} from "./type";

export const actionUserRegistration = (data: any) => async (dispatch:any) => {
  await dispatch({ type: USER_REGISTRATION_LOADING });
  try {
    const { res }: any = await registration(data);
    await dispatch({ type: USER_REGISTRATION_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: USER_REGISTRATION_ERROR, payload: error });
  }
};
