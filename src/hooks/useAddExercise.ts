import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"


export interface Exercise{
    exerciseId?:number,
    exerciseName:string,
    exerciseDescription:string,
    exerciseType:string,
    exerciseCategory:string,
    targetBodyArea:string,
    exerciseLevel:string,
    exerciseEquipment:string,
    exerciseImageUrl:string
}

interface SuccessResponse{
    data:Exercise
}

interface ErrorResponse{
    errorMessage:string
}

const useAddExercise=()=>{
    
    return useMutation<Exercise,Error,Exercise>({
        mutationFn:async(exerciseData:Exercise)=>{
            try{
              const {data}=await axios.post<SuccessResponse>("http://localhost:8080/api/v1/exercises/",exerciseData)
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

export default useAddExercise;