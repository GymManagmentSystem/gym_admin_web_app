import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { Exercise } from "./useAddExercise"


interface SuccessResponse{
    dataList:Exercise[]
}

interface ErrorResponse{
    errorMessage:string
}

const useGetExercises=()=>{

    const getPackageDetails=async()=>{
        try{
        const {data}=await axios.get<SuccessResponse>("http://localhost:8080/api/v1/exercises/")
        return data.dataList;
        }catch(e){
            if(e instanceof AxiosError){
                const error=e.response?.data.errorMessage || "Request failed"
                throw new Error(error)
                        }
            console.log(e)
                throw new Error("Un expected error occured")
        }
    }

    return useQuery<Exercise[],Error>({
        queryKey:["exerciseList"],
        queryFn:getPackageDetails
    })

}

export default useGetExercises;