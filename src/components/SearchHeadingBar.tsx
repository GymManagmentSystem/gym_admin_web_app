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
}

const SearchHeadingBar = ({
  heading,
  buttonText,
  buttonPressed,
}: SearchHeadingBarProps) => {
  const headingFontSize = { sm: "small", md: "medium", lg: "large" };
  const buttonTextSize = { sm: "x-small", xl: "small" };
  const inputSize = { sm: "xs", md: "md" };

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
        <InputLeftElement pointerEvents="none">
          <CiSearch color="#E6E6E5" />
        </InputLeftElement>
        <Input
          placeholder="Search here ..."
          borderColor="#E6E6E5"
          _placeholder={{ textColor: "#E6E6E5", fontWeight: "600" }}
          focusBorderColor="#F1B900"
          size={inputSize}
        />
      </InputGroup>
      <Button
        borderColor="#F1B900"
        textColor="#F1B900"
        variant="outline"
        onClick={buttonPressed}
        _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
      >
        <Text fontSize={buttonTextSize}>{buttonText}</Text>
      </Button>
    </HStack>
  );
};

export default SearchHeadingBar;
