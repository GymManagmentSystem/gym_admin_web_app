import { useMutation} from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

interface Member{
    memberId?:number,
    firstName:string,
    lastName:string,
    age:number,
    address:string,
    gender:string,
    height:number,
    weight:number,
    dateRegistered?:string,
    contactNumber:string
}

interface SuccessResponse{
    data:Member
}

interface ErrorResponse{
    errorMessage:string
}


const useEditMemberData = () => {
    return useMutation<Member,Error,Member>({
        mutationFn:async(memberDetails:Member)=>{
            try{
                const {data}=await axios.put<SuccessResponse>("http://localhost:8080/api/v1/members/",memberDetails);
                return data.data
            }catch(e){
                if(e instanceof AxiosError){
                    const error=((e.response?.data) as ErrorResponse).errorMessage || "Request Failed";
                    console.log(e)
                    throw new Error(error)
                }
                console.log(e)
                throw new Error("Un expected error Occured")
            }
        }
    })
}

export default useEditMemberData