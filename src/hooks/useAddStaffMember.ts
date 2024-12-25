import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

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
    password?:string
}

interface SuccessResponse{
    data:StaffMemberDetails
}

interface ErrorResponse{
    errorMessage:string
}


const useAddStaffMember=()=>{
    return useMutation<StaffMemberDetails,Error,StaffMemberDetails>({
        mutationFn:async(memberData:StaffMemberDetails)=>{
            try{
              const {data}=await axios.post<SuccessResponse>("http://localhost:8080/api/v1/staff/members/",memberData)
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

export default useAddStaffMember;