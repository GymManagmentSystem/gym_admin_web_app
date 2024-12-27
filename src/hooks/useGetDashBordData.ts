import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"




export interface PackageCount{
    memberCount:number,
    month:string,
    year:number
}

export interface Income{
    amount:number,
    year:number,
    month:string
}



interface SuccessResponse<T>{
    data:T// exercise count,position count
    dataList:T[] //memberStatusCount,monthlyPackageCount,monthlyIcome
}


interface ErrorResponse{
    errorMessage:string
}

export interface DashBordData{
    memberStatusCount:number[],
    exerciseCount:number,
    positionCount:number,
    monthlyPackageCount:PackageCount[]
    monthlyIncome:Income[]
}

const useDashBordData=()=>{

    const fetchDashbordData=async (): Promise<DashBordData>=>{
        try{
            const [memberStatusCount,exerciseCount,positionCount,monthlyPackageCount,monthlyIncome]=await Promise.all([
                axios.get<SuccessResponse<number>>("http://localhost:8080/api/v1/payments/paymentStatusCount"),
                axios.get<SuccessResponse<number>>("http://localhost:8080/api/v1/exercises/count"),
                axios.get<SuccessResponse<number>>("http://localhost:8080/api/v1/staff/members/Instructor/count"),
                axios.get<SuccessResponse<PackageCount>>("http://localhost:8080/api/v1/payments/membership/count"),
                axios.get<SuccessResponse<Income>>("http://localhost:8080/api/v1/payments/monthlyIncome"),
            ])

            console.log( 
                memberStatusCount.data.dataList,
                exerciseCount.data.data,
                positionCount.data.data,
                monthlyPackageCount.data.dataList,
                monthlyIncome.data.dataList
            )

            return {
                memberStatusCount:memberStatusCount.data.dataList,
                exerciseCount:exerciseCount.data.data,
                positionCount:positionCount.data.data,
                monthlyPackageCount:monthlyPackageCount.data.dataList,
                monthlyIncome:monthlyIncome.data.dataList
            }
    
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data) as ErrorResponse).errorMessage || "Request failed"
                throw new Error(error)
            }
            throw new Error("Unexpected error occurred");
        }

    }

    return useQuery<DashBordData,Error>({
        queryKey:["dashBordDetails"],
        queryFn:fetchDashbordData
    })
    

}

export default useDashBordData