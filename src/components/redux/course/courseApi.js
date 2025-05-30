import { apiSlice } from "../apiSlice/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints : (builder) =>({
        getCourse : builder.query({
            query : (query)=>{
                return {
                    url : `/course/${query}`
                };
            },
            providesTags : ['courses']
        }),
        getCreatorCourse : builder.query({
            query : (query)=>{
                return {
                    url : `/course/creator/${query}`
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
        getAllStudent : builder.query({
            query : (query)=>{
                return {
                    url : `/users/all/students`
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
            invalidatesTags : ["courses"]
        }),
        addLesson : builder.mutation({
            query: (info) => {
                return {
                    url: "/course/lesson",
                    method: "POST",
                    body: info,
                };
            },
            invalidatesTags : ["courses"]
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
        getCourseLessons : builder.query({
            query : (query)=>{
                return {
                    url : `/course/lessons/${query}`
                };
            },
            providesTags : ["courses"]
        }),
        getLesson : builder.query({
            query : (query)=>{
                return {
                    url : `/course/lesson/${query}`
                };
            },
            providesTags : ["courses"]
        }),
        getStudentSpend : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/spend/${query}`
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
        deleteCourse : builder.mutation({
            query : (query)=>{
                return {
                    url : `/course/${query}`,
                    method : "DELETE"
                };
            },
            invalidatesTags : ['courses']
        }),
        deleteLesson : builder.mutation({
            query : (query)=>{
                return {
                    url : `/course/lesson/${query}`,
                    method : "DELETE"
                };
            },
            invalidatesTags : ['courses']
        }),
        updateLesson : builder.mutation({
            query : (info)=>{
                return {
                    url : `/course/lesson`,
                    method : "PUT",
                    body : info
                };
            },
            invalidatesTags : ['courses']
        }),
        getTopEnrolled : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/top/${query}`
                };
            },
            providesTags : ["courses"]
        }),
        getEnrolledStats : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/stats/${query}`
                };
            },
            providesTags : ["courses"]
        }),
        getTotalEarning : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/earning/${query}`
                };
            },
            providesTags : ["courses"]
        }),
        addView : builder.mutation({
            query: (info) => {
                return {
                    url: "/enrolled/view",
                    method: "POST",
                    body: info,
                };
            },
            invalidatesTags : ['enrolled', 'courses']
        }),
        getProgressData : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/progress?courseId=${query?.courseId}&userId=${query?.userId}`
                };
            },
            providesTags : ['enrolled', 'courses']
        }),
        getLast3CourseProgress : builder.query({
            query : (query)=>{
                return {
                    url : `/enrolled/progress/${query}`
                };
            },
            providesTags : ["courses"]
        }),
        getCourseCategory : builder.query({
            query : (query)=>{
                return {
                    url : `/course/category/${query}`
                };
            },
            providesTags : ['courses']
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
    useGetCourseLessonsQuery,
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
    useRemoveDislikeMutation,
    useGetStudentSpendQuery,
    useDeleteCourseMutation,
    useGetCreatorCourseQuery,
    useAddLessonMutation,
    useDeleteLessonMutation,
    useUpdateLessonMutation,
    useGetTopEnrolledQuery,
    useGetEnrolledStatsQuery,
    useGetTotalEarningQuery,
    useAddViewMutation,
    useGetProgressDataQuery,
    useGetLast3CourseProgressQuery,
    useGetCourseCategoryQuery,
    useGetAllStudentQuery
} = courseApi

