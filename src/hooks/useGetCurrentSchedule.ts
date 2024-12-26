import axios, { AxiosError } from "axios";
import { ScheduleDetails } from "./useAddSchedule";
import { useQuery } from "@tanstack/react-query";


interface SuccessResponse{
    dataList:ScheduleDetails[]
}

interface ErrorResponse{
    errorMessage:string
}


const useGetCurrentSchedule=(memberId:number)=>{
    console.log("member id",memberId);
    const getCurrentSchedule=async()=>{
        try{
        const {data}=await axios.get<SuccessResponse>(`http://localhost:8080/api/v1/schedules/current/${memberId}`)
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

    return useQuery<ScheduleDetails[],Error>({
        queryKey:["currentScheduleList",memberId],
        queryFn:getCurrentSchedule
    })

}
export default useGetCurrentSchedule;