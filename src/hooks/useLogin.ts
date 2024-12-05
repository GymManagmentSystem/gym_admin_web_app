import { useMutation } from "@tanstack/react-query";
import axios from "axios";



interface UserCredentials {
    userName: string;
    password: string;
  }
  
  interface SuccessResponse {
    successMessage: String;
    token: String;
  }
  
  interface ErrorResponse {
    error: String;
  }
  
  type Response = SuccessResponse | ErrorResponse;
  
  interface AxiosErrorResponse<T = any> {
    response?: {
      data: T;
      status: number;
    };
  }

const useLogin=()=>{

    return useMutation<
    Response,
    AxiosErrorResponse<ErrorResponse>,
    UserCredentials
  >({
    mutationFn: async (userCredentials:UserCredentials) => {
      const reponse = await axios.post<SuccessResponse>(
        "http://localhost:8080/api/v1/auth/token",
        {
          userName: userCredentials.userName,
          password: userCredentials.password,
        }
      );

      return reponse.data;
    },
  });
}

export default useLogin;