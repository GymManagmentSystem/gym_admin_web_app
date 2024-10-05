import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

interface SearchHeadingBarProps {
  buttonPressed: () => void;
}

const SearchHeadingBar = ({ buttonPressed }: SearchHeadingBarProps) => {
  const headingWidth = {sm:"15%", md: "20%", lg: "20%", xl: "10%" };
  const headingFontSize = { sm:"0.6rem",md: "1rem", lg: "1.2rem" };
  const inputWidth = { sm:"65%",md: "50%", lg: "50%", xl: "70%" };
  const buttonWidth = { md: "20%", lg: "30%", xl: "10%" };
  const buttonSize = { sm:"xs",md: "sm", lg: "md" };
  const inputSize = { sm:"xs",md: "sm", lg: "md" };
  return (
    <HStack
      backgroundColor="#fff"
      spacing={4}
      justifyContent="space-around"
      mr={2}
      ml={2}
      mt={2}
    >
      <Heading
        color="#000"
        whiteSpace="nowrap"
        width={headingWidth}
        fontSize={headingFontSize}
      >
        All Members
      </Heading>
      <InputGroup width={inputWidth} size={inputSize}>
        <InputLeftElement pointerEvents="none">
          <CiSearch color="#E6E6E5" />
        </InputLeftElement>
        <Input
          placeholder="Search here ..."
          borderColor="#E6E6E5"
          _placeholder={{ textColor: "#E6E6E5", fontWeight: "600" }}
          focusBorderColor="#F1B900"
        />
      </InputGroup>
      <Button
        borderColor="#F1B900"
        textColor="#F1B900"
        variant="outline"
        width={buttonWidth}
        onClick={buttonPressed}
        _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
        size={buttonSize}
      >
        Add Member
      </Button>
    </HStack>
  );
};

export default SearchHeadingBar;
