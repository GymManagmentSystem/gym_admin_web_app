import axios, { AxiosError } from "axios"
import { PackageDetails } from "./useGetPackageDetails"
import { useQuery } from "@tanstack/react-query"
import { PaymentDetails } from "./useGetPaymentHistory"


interface SuccessResponse{
    dataList:PaymentDetails[]
}

interface ErrorResponse{
    errorMessage:string
}

const useGetPaymentsDetails=()=>{

    const getPaymentDetails=async()=>{
        try{
        const {data}=await axios.get<SuccessResponse>(`http://localhost:8080/api/v1/payments/latest`)
        console.log(data.dataList)
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
        queryKey:["paymentsDetails"],
        queryFn:getPaymentDetails
    })

}

export default useGetPaymentsDetails;