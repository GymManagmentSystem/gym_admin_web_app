import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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


type PackageResponse=SuccessResponse | ErrorResponse


const useGetPackageDetails=()=>{

    const getPackageDetails=async()=>{
        try{
        const {data}=await axios.get<PackageResponse>("http://localhost:8080/api/v1/packages/")
        if("dataList" in data){
            console.log(data.dataList)
            return data.dataList
        }else{
            throw new Error (data.errorMessage)
        }
        }catch(e){
            console.log(e)
            throw new Error("Request failed");
        }
    }

    return useQuery<packageDetails[],Error>({
        queryKey:["packagesList"],
        queryFn:getPackageDetails
    })
}

export default useGetPackageDetails;