import requestApi from "../../services/api/requestApi";

export const registration = (data:any) => requestApi.post('/registr',data)