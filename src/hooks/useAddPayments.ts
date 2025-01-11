import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { PaymentDetails } from "./useGetPaymentHistory"



interface SuccessResponse{
    data:PaymentDetails
}

interface ErrorResponse{
    errorMessage:string
}

const useAddPayments=(memberId:number)=>{
    return useMutation<PaymentDetails,Error,PaymentDetails>({
        mutationFn:async(paymentData:PaymentDetails)=>{
            try{
              const {data}=await axios.post<SuccessResponse>(`http://localhost:8080/api/v1/payments/${paymentData.memberId}`,paymentData)
              return data.data
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data) as ErrorResponse).errorMessage||"Request failed"
                console.log("catch error in catch block",error)
                throw new Error(error);      
            }
            console.log(e)
            throw new Error("un expected error occured")
            
        }

        }
    })
}
export default useAddPayments