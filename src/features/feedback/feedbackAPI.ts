import { axiosInstance } from "../../app/api"

export const postFeedback = async (data: FeedbackData) => {
    const resp = await axiosInstance.post('/feedbacks', data)
    return resp
}

export interface FeedbackData {
    email: string
    phone: string
    message: string
    attachment?: string
}