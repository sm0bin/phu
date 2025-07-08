import type { TAcademicSemester } from "../../../types/academicManagement.type";
import type { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemesters
    getAllSemesters: builder.query({
      query: (args) => {
        console.log("Fetching all semesters with args:", args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // createSemester
    createSemester: builder.mutation({
      query: (semester) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: semester,
      }),
    }),
    // updateSemester: builder.mutation({
    //     query: ({ id, ...semester }) => ({
    //         url: `/academic-semesters/${id}`,
    //         method: 'PATCH',
    //         body: semester,
    //     }),
    //     transformResponse: (response: TResponseRedux<TAcademicSemester>) => {
    //         return {
    //             data: response.data,
    //             meta: response.meta,
    //         }
    //     }
    // }),
    // deleteSemester: builder.mutation({
    //     query: (id) => ({
    //         url: `/academic-semesters/${id}`,
    //         method: 'DELETE',
    //     }),
    //     transformResponse: (response: TResponseRedux<TAcademicSemester>) => {
    //         return {
    //             data: response.data,
    //             meta: response.meta,
    //         }
    //     }
    // }),
  }),
});

export const { useGetAllSemestersQuery, useCreateSemesterMutation } =
  academicManagementApi;
