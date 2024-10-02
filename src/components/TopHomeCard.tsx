import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";




interface TopHomeCardProps {
  children:ReactNode,  
  title1: string;
  title2:string;
  count: string;
}

const TopHomeCard = ({children,title1,title2,count}:TopHomeCardProps) => {
  return (
    <Card
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      variant="elevated"
      height={{md:"80px",lg:"116px"}}
      backgroundColor="#fff"
      padding={3}
      borderRadius="20px"
    >
      <Box display="flex"  alignItems="center" justifyContent="center" height="100%" width="40%">
            {children}
      </Box>
      <CardBody width="60%"> 
        <Text fontSize={{md:"0.7rem",lg:"1rem"}} color="#000">
            {title1}
        </Text>
        <Text fontSize={{md:"0.7rem",lg:"1rem"}}  color="#000">
            {title2}
        </Text>
        <Heading fontSize={{md:"0.7rem",lg:"1rem"}} color="#000">
            {count}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default TopHomeCard;
