import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";




interface MemberTableDetails{
    memberId:number,
    firstName:string,
    lastName:string,
    dateRegistered:string,
    gender:string
}

interface SuccessResponse{
    dataList:MemberTableDetails[]
}

interface ErrorResponse{
   errorMessage:string 
}


const useMemeberTableDetails=()=>{
    const getMemberTableDetails=async()=>{
        try{
            const {data}=await axios.get<SuccessResponse>('http://localhost:8080/api/v1/members/') 
            console.log(data.dataList);
            return data.dataList;
               
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
    
    return  useQuery<MemberTableDetails[],Error>({
    queryKey:["memberTableDetails"],
    queryFn:getMemberTableDetails
})
}

export default useMemeberTableDetails