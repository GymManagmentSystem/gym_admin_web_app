import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface SideBarLinkProps {
  title: string;
  imageSrc: string;
}

const SideBarLink = ({ title, imageSrc }: SideBarLinkProps) => {
  const [isHoverd, setIsHovered] = useState(false);
  return (
    <HStack
    justifyContent="space-evenly"
    width="100%"
    height={{md:"35px",lg:"50px",xl:"50px"}}
      _hover={{ backgroundColor: "#F1B900", fontcolor: "#ffffff" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box width="30%" style={{ display: "flex", justifyContent: "center" }}>
        <Image src={imageSrc} color={isHoverd ? "#ffffff" : "#62615D"} width={{md:"20px",lg:"25px",xl:"25px"}} height={{md:"20px",lg:"25px",xl:"25px"}} objectFit="cover" />
      </Box>
      <Box width="70%">
        <Text
          fontSize={{md:"0.8rem",lg:"1rem",xl:"1rem"}}
          color={isHoverd ? "#ffffff" : "#62615D"}
        >
          {title}
        </Text>
      </Box>
    </HStack>
  );
};

export default SideBarLink;
