import { axiosInstance } from "../../app/api"

export const postFeedback = async (data: FeedbackData) => {
    console.log(data)
    return new Promise((resolve) => {
        setTimeout(() => {resolve('xxx')}, 1000)
    })
    return 'sss'
    //const resp = await axiosInstance.post('/feedbacks')
    //return resp.data
}

export interface FeedbackData {
    email: string
    phone: string
    message: string
    attachment?: string
}