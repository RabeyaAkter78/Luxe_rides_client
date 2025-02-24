import { baseApi } from "../../api/baseApi";

const AuthAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/api/auth/login",
                method: "POST",
                body: userInfo
            })
        }),
       
    })
});
export const {
    useLoginMutation,

} = AuthAPi;