import { useQuery } from "@tanstack/react-query";
import axios from "axios";



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

type Response=SuccessResponse | ErrorResponse


const useMemeberTableDetails=()=>{
    const getMemberTableDetails=async()=>{
        try{
            console.log(axios.defaults.headers.common.Authorization);
            const {data}=await axios.get<Response>('http://localhost:8080/api/v1/members/') 
            if('dataList' in data){
                console.log(data.dataList);
                return data.dataList;
            }
            else{
                throw new Error(data.errorMessage)
            }    
        }catch(e){
            throw new Error("Request failed")
        }
    }
    
    return  useQuery<MemberTableDetails[],Error>({
    queryKey:["memberTableDetails"],
    queryFn:getMemberTableDetails
})
}

export default useMemeberTableDetails