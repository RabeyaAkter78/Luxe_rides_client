import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RootState {
    auth: {
      token: string | null;
    };
  }
const BASE_URL='https://assignment4-backend-rabeyaakter78s-projects.vercel.app/'

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
});



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
 
    endpoints: () => ({})

})