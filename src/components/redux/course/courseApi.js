import { apiSlice } from "../apiSlice/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints : (builder) =>({
        getCourse : builder.query({
            query : (query)=>{
                return {
                    url : `/course/${query}`
                };
            }
        }),
        getAllCourse : builder.query({
            query : (query)=>{
                return {
                    url : `/course`
                };
            }
        }),
        addCourse: builder.mutation({
            query: (info) => {
                return {
                    url: "/course",
                    method: "POST",
                    body: info,
                };
            },
        }),
        enrolledCourse: builder.mutation({
            query: (info) => {
                return {
                    url: "/enrolled",
                    method: "POST",
                    body: info,
                };
            },
            invalidatesTags : ['courses','enrolled']
        }),
        getEnrolledCourse : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/${query}`
                };
            },
            providesTags : ['enrolled']
        }),
        getSingleEnrolled : builder.query({
            query : (query)=>{
                console.log(query)
                return {
                    url : `/enrolled?userId=${query?.userId}&courseId=${query?.courseId}`
                };
            },
            providesTags : ['courses']
        }),
        getLesson : builder.query({
            query : (query)=>{
                return {
                    url : `/course/lesson/${query}`
                };
            }
        }),
        addComment: builder.mutation({
            query: (info) => {
                return {
                    url: "/comment",
                    method: "POST",
                    body: info,
                };
            },
            invalidatesTags : ['comment']
        }),
        getComment : builder.query({
            query : (query)=>{
                return {
                    url : `/comment/${query}`
                };
            },
            providesTags : ['comment']
        }),
        addLike : builder.mutation({
            query: (info) => {
                return {
                    url: "/reaction/like",
                    method: "POST",
                    body: info,
                };
            },
            invalidatesTags : ['reaction']
        }),
        getLike : builder.query({
            query : (query)=>{
                return {
                    url : `/reaction/like?lessonId=${query?.lessonId}&userId=${query?.userId}`
                };
            },
            providesTags : ['reaction']
        }),
        getAllLike : builder.query({
            query : (lessonId)=>{
                return {
                    url : `/reaction/like/${lessonId}`
                };
            },
            providesTags : ['reaction']
        }),
        addDislike : builder.mutation({
            query: (info) => {
                return {
                    url: "/reaction/dislike",
                    method: "POST",
                    body: info,
                };
            },
            invalidatesTags : ['reaction']
        }),
        getDislike : builder.query({
            query : (query)=>{
                return {
                    url : `/reaction/dislike?lessonId=${query?.lessonId}&userId=${query?.userId}`
                };
            },
            providesTags : ['reaction']
        }),
        getAllDislike : builder.query({
            query : (lessonId)=>{
                return {
                    url : `/reaction/dislike/${lessonId}`
                };
            },
            providesTags : ['reaction']
        }),
        removeLike : builder.mutation({
            query : (query)=>{
                return {
                    url : `/reaction/like?lessonId=${query?.lessonId}&userId=${query?.userId}`,
                    method : "DELETE"
                };
            },
            invalidatesTags : ['reaction']
        }),
        removeDislike : builder.mutation({
            query : (query)=>{
                return {
                    url : `/reaction/dislike?lessonId=${query?.lessonId}&userId=${query?.userId}`,
                    method : "DELETE"
                };
            },
            invalidatesTags : ['reaction']
        }),
    })
})

export const {
    useGetCourseQuery,
    useGetAllCourseQuery,
    useAddCourseMutation,
    useEnrolledCourseMutation,
    useGetEnrolledCourseQuery,
    useGetSingleEnrolledQuery,
    useGetLessonQuery,
    useAddCommentMutation,
    useGetCommentQuery,
    useAddLikeMutation,
    useGetLikeQuery,
    useGetAllLikeQuery,
    useAddDislikeMutation,
    useGetDislikeQuery,
    useGetAllDislikeQuery,
    useRemoveLikeMutation,
    useRemoveDislikeMutation
} = courseApi

