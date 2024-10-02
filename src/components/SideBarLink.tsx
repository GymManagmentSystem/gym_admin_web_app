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
      style={{ justifyContent: "space-evenly", width: "262px", height: "50px" }}
      _hover={{ backgroundColor: "#F1B900", fontcolor: "#ffffff" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box width="30%" style={{ display: "flex", justifyContent: "center" }}>
        <Image src={imageSrc} color={isHoverd ? "#ffffff" : "#62615D"} />
      </Box>
      <Box width="70%">
        <Text
          style={{ fontSize: "1rem" }}
          color={isHoverd ? "#ffffff" : "#62615D"}
        >
          {title}
        </Text>
      </Box>
    </HStack>
  );
};

export default SideBarLink;
