import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface PaymentDetails{
    paymentId?:number,
    memberId?:number,
    packageType:string,
    paymentDate:string,
    paymentTime:string,
    validity:boolean,
    expirayDate:string,
    paymentAmount:number,
}

interface SuccessResponse{
    dataList:PaymentDetails[]
}

interface ErrorResponse{
    errorMessage:string
}


const useGetPaymentHistory=(memberId:number)=>{

    const getPaymentHistoryList=async()=>{
        try{
        const {data}=await axios.get<SuccessResponse>(`http://localhost:8080/api/v1/payments/${memberId}`)
        return data.dataList;
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data) as ErrorResponse).errorMessage || "Request failed"
                throw new Error(error)
                        }
            console.log(e)
                throw new Error("Un expected error occured")
        }
    }

    return useQuery<PaymentDetails[],Error>({
        queryKey:["paymentHistoryList",memberId],
        queryFn:getPaymentHistoryList
    })

}

export default useGetPaymentHistory;