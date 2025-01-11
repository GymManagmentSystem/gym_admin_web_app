import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface MemberDetails{
    memberId:number,
    firstName:string,
    lastName:string,
    age:number,
    address:string,
    gender:string,
    contactNumber:string,
    email:string,
    dateRegistered:string,
    weight:number,
    height:number
}



interface Details{
    member:MemberDetails,  
}

interface SuccessResponse{
    data:Details
}

interface ErrorResponse{
    errorMessage:string
}


const useGetMemberDetailsById=(memberId:number)=>{

    const getMemberDeatilsById=async(memberId:number)=>{
        console.log("member id :",memberId);
        try{
            const {data}=await axios.get<SuccessResponse>(`http://localhost:8080/api/v1/members/${memberId}`)
            return data.data
        }catch(e){
            if(e instanceof AxiosError){
                const error=((e.response?.data) as ErrorResponse).errorMessage || "Request failed"
                console.log(error)
                throw new Error(error)
            }
            console.log(e)
            throw new Error("unexpected Error Occured")
        }  
    }    
    return useQuery<Details,Error>({
        queryKey:["singleMemberDetails",memberId],
        queryFn:()=>getMemberDeatilsById(memberId)
    })

}

export default useGetMemberDetailsById;