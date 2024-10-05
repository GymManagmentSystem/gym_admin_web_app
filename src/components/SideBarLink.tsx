import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SideBarLinkProps {
  title: string;
  imageSrc: string;
  path:string
}

const SideBarLink = ({ title, imageSrc,path}: SideBarLinkProps) => {
  const [isHoverd, setIsHovered] = useState(false);
  const hStackHeight={sm:"20px",md:"35px",lg:"50px",xl:"50px"}
  const imageWidth={sm:"15px",md:"20px",lg:"25px",xl:"25px"};
  const imageHeight={sm:"15px",md:"20px",lg:"25px",xl:"25px"};
  const titleFontSize={sm:"0.6rem",md:"0.8rem",lg:"1rem",xl:"1rem"}
  return (
    <HStack
    justifyContent="space-evenly"
    width="100%"
    height={hStackHeight}
      _hover={{ backgroundColor: "#F1B900", fontcolor: "#ffffff" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box width="30%" style={{ display: "flex", justifyContent: "center" }}>
        <Image src={imageSrc} color={isHoverd ? "#ffffff" : "#62615D"} width={imageWidth} height={imageHeight} objectFit="cover" />
      </Box>
      <Box width="70%">
        <Link to={path}><Text
          fontSize={titleFontSize}
          color={isHoverd ? "#ffffff" : "#62615D"}
        >
          {title}
        </Text></Link>
      </Box>
    </HStack>
  );
};

export default SideBarLink;
