import {Box,HStack, Image, Text, VStack } from "@chakra-ui/react"
import logo from "../assets/MotionZone.png"
import profileLogo from "../assets/profile.png"

// interface HeadingProps{
//     userName:string
// }

const Heading = () => {
  return (
    <>
    <HStack style={{justifyContent:'space-between',backgroundColor:'#000'}} p={5}>
        <Image src={logo}/>
        <Box style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} width={{md:'20%',lg:'15%',xl:'15%'}}>
            <VStack>
                <Text>Mr.Fernando</Text>
                <Text>Admin</Text>
            </VStack>
            <Image src={profileLogo}/>
        </Box>
    </HStack>
    </>
  )
}

export default Heading

