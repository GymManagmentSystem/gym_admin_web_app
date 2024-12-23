import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";


interface StaffMemberTableDetails{
    memberId:number,
    firstName:string,
    lastName:string,
    contactNumber:string,
    registerdDate:string,
    gender:string
}

interface SuccessResponse{
    dataList:StaffMemberTableDetails[]
}

interface ErrorResponse{
    errorMessage:string
}




const useStaffMemberTableDetails=()=>{
    const getStaffMemberTableDetails=async()=>{
        try{
            const {data}=await axios.get<SuccessResponse>('http://localhost:8080/api/v1/staff/members/') 
            return data.dataList         
        }catch(e){
            if(e instanceof AxiosError){
                const error=e.response?.data.errorMessage || "Request failed"
                throw new Error(error)
            }
            console.log(e)
            throw new Error("Un expected error occured")
            
        }
    }
    
    return  useQuery<StaffMemberTableDetails[],Error>({
    queryKey:["staffMemberTableDetails"],
    queryFn:getStaffMemberTableDetails
})
    
}

export default useStaffMemberTableDetails;