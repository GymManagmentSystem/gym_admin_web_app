import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import useGetExerciseNameList from "../hooks/useGetExerciseNameList";

const SchedulePage = () => {
    const navigate=useNavigate()
    const [memberId,setMemberId]=useState("")
    const {data:exerciseNameList}=useGetExerciseNameList();
    const toast=useToast();


  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none" 
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%">
          <CiSearch color="#a7a5a5" strokeWidth={2} />
        </InputLeftElement>
        <Input
          placeholder="Enter Member Id"
          borderColor="#BABABA"
          _placeholder={{ textColor: "#a7a5a5", fontWeight: "400"  }}
          focusBorderColor="#F1B900"
          size={{xl:"lg"}}
          value={memberId}
          onChange={(e)=>setMemberId(e.target.value)}
          color="black"
        />
      </InputGroup>
      <HStack mt={10}>
        <Button 
        size={{sm:"md",lg:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
          onClick={()=>navigate(`/app/schedule/:${memberId}`)}
        >
          View
        </Button>

        <Button 
        size={{sm:"md",lg:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
          onClick={()=>{
            if(exerciseNameList && exerciseNameList.length>0){
              navigate(`/app/schedule/addSchedule/:${memberId}`)
            }
            else{
              toast({
                title: "Cannot Add A Schedule",
                description: "Exercises are empty.Please Add Exercises First !",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
                colorScheme: "red",
              });
            }
             
          }  
          }
        >
          Add 
        </Button>
      </HStack>
    </>
  );
};

export default SchedulePage;
