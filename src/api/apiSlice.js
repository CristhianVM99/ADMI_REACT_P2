import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://serviciopagina.upea.bo/api/InstitucionUPEA'
    }),
    endpoints: (builder) => ({
        getInstitucion: builder.query({
            query: () => '/'+process.env.REACT_APP_ID_INSTITUCION,
        }),       
    })
})

export const { useGetInstitucionQuery } = apiSlice