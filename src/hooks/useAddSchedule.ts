import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

interface Schedule{
    memberId:number,
    scheduleDay1:string,
    scheduleDay2?:string,
    scheduleDays:string,
    scheduleDescription:string,
    scheduleExpirayDate:string,
    scheduleRegisteredDate:string,
    scheduleType:string,
    scheduleValidTime:number
}

interface Exercise{
    memberId?:number,
    duration?:number,
    exerciseName:string,
    reps?:string,
    sets?:number
}

interface ScheduleDetails{
    schedule:Schedule
    exerciseList:Exercise[]
}

interface SuccessResponse{
    data:ScheduleDetails
}

interface ErrorResponse{
    errorMessage:string
}

const useAddSchedule=()=>{

    return useMutation<ScheduleDetails,Error,ScheduleDetails>({
        mutationFn:async(scheduleDetails:ScheduleDetails)=>{
            try{
              const {data}=await axios.post<SuccessResponse>(`http://localhost:8080/api/v1/schedules/${scheduleDetails.schedule.memberId}`,scheduleDetails)
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

export default useAddSchedule