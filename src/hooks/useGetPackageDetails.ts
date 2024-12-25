import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";


interface packageDetails{
    packageId:number,
    packageName:string,
    packageDescription:string,
    packageValidTime:number,
    packageAmount:number
}

interface SuccessResponse{
    dataList:packageDetails[]
}

interface ErrorResponse{
    errorMessage:string
}


const useGetPackageDetails=()=>{

    const getPackageDetails=async()=>{
        try{
        const {data}=await axios.get<SuccessResponse>("http://localhost:8080/api/v1/packages/")
            console.log(data.dataList)
            return data.dataList    
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data) as ErrorResponse).errorMessage || "Request failed"
                console.log(error)
                throw new Error(error)
            }
            console.log(e)
            throw new Error("unexpected Error Occured")
        }
    }

    return useQuery<packageDetails[],Error>({
        queryKey:["packagesList"],
        queryFn:getPackageDetails
    })
}

export default useGetPackageDetails;