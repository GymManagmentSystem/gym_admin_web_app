import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface ExerciseDetails{
     exerciseName:string
    exerciseType:string
    exerciseUnit:string
}

interface SuccessResponse{
    dataList:ExerciseDetails[]
}

interface ErrorResponse{
    errorMessage:string
}


const useGetExerciseNameList=()=>{

    const getExerciseNameList=async()=>{
        try{
        const {data}=await axios.get<SuccessResponse>("http://localhost:8080/api/v1/exercises/names/")
        return data.dataList;
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data)as ErrorResponse).errorMessage || "Request failed"
                throw new Error(error)
            }
            console.log(e)
                throw new Error("Un expected error occured")
        }
    }

    return useQuery<ExerciseDetails[],Error>({
        queryKey:["exercisesNameList"],
        queryFn:getExerciseNameList
    })

}

export default useGetExerciseNameList