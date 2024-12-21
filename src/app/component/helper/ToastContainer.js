import { toast } from "react-toastify";


export const notify =(message)=> toast.success(message)
export const notifyError=(message)=>toast.error(message)