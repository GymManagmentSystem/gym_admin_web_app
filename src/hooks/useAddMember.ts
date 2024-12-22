import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface savedMember{
    memberId?:number,
    firstName:string,
    lastName:string,
    email:string,
    age:number,
    address:string,
    contactNumber:number,
    weight:number,
    height:number,
    gender:string,
    packageType:string,
    paymentDate:string,
    paymentTime:string,
    validity:boolean
}

interface SuccessResponse{
    data:savedMember
}

interface ErrorResponse{
    errorMessage:string
}

type MemberResponse = SuccessResponse | ErrorResponse


const useAddMember=()=>{

    return useMutation<savedMember,AxiosError|ErrorResponse,savedMember>({
        mutationFn:async(memberData:savedMember)=>{
            try{
              const {data}=await axios.post<MemberResponse>("http://localhost:8080/api/v1/members/",memberData)
              if("data" in data){
                return data.data //as we are returning data.data this should be return savedMmember not MemberResponse
              }else{
                console.log("first catch error in try block",data.errorMessage)
                throw new Error (data.errorMessage);
              }
        }catch(e){
            if(e instanceof AxiosError){
                console.log("catch error in catch block",e.response?.data)
                const error=e.response?.data?.errorMessage||"Request failed"
                throw new Error(error);      
            }
            console.log(e)
            throw new Error("un expected error occured")
            
        }

        }
    })
}

export default useAddMember;