import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"


interface SuccessResponse{
    data:boolean
}

interface ErrorResponse{
    errorMessage:string
}


const useGetMemberExistById = (memberId:string) => {

    const memberExitsById=async()=>{
        try{
            const {data}=await axios.get<SuccessResponse>(`http://localhost:8080/api/v1/members/${memberId}/exist`)
            return data.data
        }catch(e){
            if(e instanceof AxiosError){
                if(e.response){
                    throw new Error(((e.response.data) as ErrorResponse).errorMessage)
                }if(e.request){
                    throw new Error("No response from the server")
                }
                throw new Error("Un expected error occured")
            }else{
                throw new Error("Request failed")
            }
        }
    }

    return useQuery<boolean,Error>({
        queryKey:["isMemberExist",memberId],
        queryFn:memberExitsById,
        enabled:false,
        refetchOnWindowFocus:false 
    })

}

export default useGetMemberExistById