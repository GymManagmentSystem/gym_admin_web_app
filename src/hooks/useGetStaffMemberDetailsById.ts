import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";



interface StaffMemberDetails{
    firstName:string,
    lastName:string,
    contactNumber:string,
    email:string,
    age:number,
    gender:string,
    address:string,
    position?:string,
    registeredDate:string,
    qualifications:string,
}

interface SuccessResponse{
    data:StaffMemberDetails
}

interface ErrorResponse{
    errorMessage:string
}

const useGetStaffMemberDetailsById=(memberId:number)=>{

    const getMemberDeatilsById=async(memberId:number)=>{
        console.log("member id :",memberId);
        try{
            const {data}=await axios.get<SuccessResponse>(`http://localhost:8080/api/v1/staff/members/${memberId}`)
            return data.data
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data) as ErrorResponse).errorMessage || "Request failed"
                console.log("staff member ",error)
                throw new Error(error)
            }
            console.log(e)
            throw new Error("unexpected Error Occured")
        }  
    }    
    return useQuery<StaffMemberDetails,Error>({
        queryKey:["singleStaffMemberDetails",memberId],
        queryFn:()=>getMemberDeatilsById(memberId)
    })

}

export default useGetStaffMemberDetailsById;