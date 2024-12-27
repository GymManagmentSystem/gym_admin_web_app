import { useMutation } from "@tanstack/react-query";
import { PackageDetails } from "./useGetPackageDetails";
import axios, { AxiosError } from "axios";


interface SuccessResponse{
    data:PackageDetails
}

interface ErrorResponse{
    errorMessage:string
}

const useAddPackage=()=>{
    return useMutation<PackageDetails,Error,PackageDetails>({
        mutationFn:async(packageeData:PackageDetails)=>{
            try{
              const {data}=await axios.post<SuccessResponse>("http://localhost:8080/api/v1/packages/",packageeData)
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

export default useAddPackage;