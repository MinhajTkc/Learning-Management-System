import UserData from "../views/plugin/UserData";

export const API_BASE_URL = `http://127.0.0.1:8000/api/v1/`;
export const userId = UserData()?.user_id;

export const PAYPAL_CLIENT_ID = "AQudwkDUQIc2oHKfei02hbb_qDvhZK1Ewf9vnaz2zjXDVO44L6MJBpmvE1HhBSZon1warSqLnmUWRHaC";

export const teacherId = UserData()?.teacher_id; 