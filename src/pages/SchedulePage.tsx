import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SchedulePage = () => {
    const navigate=useNavigate()
    const [memberId,setMemberId]=useState("")
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CiSearch color="#E6E6E5" />
        </InputLeftElement>
        <Input
          placeholder="Enter Member Id"
          borderColor="#BABABA"
          _placeholder={{ textColor: "#E6E6E5", fontWeight: "600" }}
          focusBorderColor="#F1B900"
          size={{xl:"lg"}}
          value={memberId}
          onChange={(e)=>setMemberId(e.target.value)}
          
        />
      </InputGroup>
      <HStack mt={10}>
        <Button 
        size={{sm:"md",lg:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
          onClick={()=>navigate(`/schedule/:${memberId}`)}
        >
          View
        </Button>

        <Button 
        size={{sm:"md",lg:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
        >
          Add 
        </Button>
      </HStack>
    </>
  );
};

export default SchedulePage;
