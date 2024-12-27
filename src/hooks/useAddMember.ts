import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface savedMember{
    memberId?:number,
    firstName:string,
    lastName:string,
    email:string,
    age:number,
    address:string,
    contactNumber:string,
    weight:number,
    height:number,
    gender:string,
    paymentAmount:number,
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



const useAddMember=()=>{

    return useMutation<savedMember,Error,savedMember>({
        mutationFn:async(memberData:savedMember)=>{
            try{
              const {data}=await axios.post<SuccessResponse>("http://localhost:8080/api/v1/members/",memberData)
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

export default useAddMember;