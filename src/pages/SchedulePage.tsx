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
import useGetMemberExistById from "../hooks/useGetMemberExistById";

const SchedulePage = () => {
    const navigate=useNavigate()
    const [memberId,setMemberId]=useState("")
    const {data:exerciseNameList}=useGetExerciseNameList();
    const toast=useToast();
    const {data:isMemberExist,refetch,error}=useGetMemberExistById(memberId);

    const addButtonPress=()=>{
     if(exerciseNameList && exerciseNameList.length>0){
        refetch().then(()=>{
          if(isMemberExist){
            navigate(`/app/schedule/addSchedule/:${memberId}`)
          }else{
            toast({
              title: "Member Not Exist",
              description: "Member with that id doesn't exist!",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top-right",
              colorScheme: "red",
            });
          }
        })
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

    const viewButtonPress=()=>{
      if(isMemberExist){
        navigate(`/app/schedule/:${memberId}`)
      }
      else{
        toast({
          title: "Member Not Exist",
          description: "Member with that id doesn't exist!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          colorScheme: "red",
        });
      }
      
    }

  return (
    <>
    {error &&(
      toast({
        title: "Error",
        description: "Error While Searching Member",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        colorScheme: "red",
      })
    )}
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
          onClick={viewButtonPress}
        >
          View
        </Button>

        <Button 
        size={{sm:"md",lg:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
          onClick={addButtonPress}
        >
          Add
        </Button>
      </HStack>
    </>
  );
};

export default SchedulePage;
