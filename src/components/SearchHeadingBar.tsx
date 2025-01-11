import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

interface SearchHeadingBarProps {
  heading: string;
  buttonText: string;
  buttonPressed: () => void;
  onSearch:(term:string)=> void
}

const SearchHeadingBar = ({
  heading,
  buttonText,
  buttonPressed,
  onSearch
}: SearchHeadingBarProps) => {
  const headingFontSize = { sm: "small", md: "medium", lg: "large" };
  const buttonTextSize = { sm:"xx-small" , xl: "small" };
  const inputSize = { sm: "xs", md: "md" };
  const buttonSize={sm:"xs",md:"md"}

  return (
    <HStack
      backgroundColor="#fff"
      spacing={4}
      justifyContent="space-around"
      mr={2}
      ml={2}
      mt={2}
    >
      <Heading color="#000" whiteSpace="nowrap" fontSize={headingFontSize}>
        {heading}
      </Heading>
      <InputGroup>
        <InputLeftElement pointerEvents="none"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%">
          <CiSearch color="#a7a5a5" strokeWidth={1}/>
        </InputLeftElement>
        <Input
          placeholder="Search here ..."
          borderColor="#E6E6E5"
          _placeholder={{ textColor: "#a7a5a5", fontWeight: "400" }}
          focusBorderColor="#F1B900"
          size={inputSize}
          onChange={(e)=>onSearch(e.target.value)}
          color="black"
          ml={2}
        />
      </InputGroup>
      <Button
        borderColor="#F1B900"
        textColor="#F1B900"
        variant="outline"
        onClick={buttonPressed}
        _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
        size={buttonSize}
        fontSize={buttonSize}
        padding={2}
      >
        <Text fontSize={buttonTextSize}>{buttonText}</Text>
      </Button>
    </HStack>
  );
};

export default SearchHeadingBar;
