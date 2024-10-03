import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

interface SearchHeadingBarProps{
    buttonPressed:()=>void
}

const SearchHeadingBar = ({buttonPressed}:SearchHeadingBarProps) => {
  const headingWidth = { md: "20%", lg: "20%", xl: "10%" };
  const headingFontSize = { md: "1.2rem", lg: "1.2rem" };
  const inputWidth = { md: "50%", lg: "50%", xl: "70%" };
  const buttonWidth = { md: "20%", lg: "30%", xl: "10%" };
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
      <InputGroup width={inputWidth}>
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
      >
        Add Member
      </Button>
    </HStack>
  );
};

export default SearchHeadingBar;
