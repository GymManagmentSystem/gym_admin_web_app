import {  HStack, Image } from "@chakra-ui/react"
import logo from "../assets/MotionZone.png"


const LoginHeader = () => {
  return (
    <HStack style={{justifyContent:"flex-start",backgroundColor:'#000'}} width="100%" p={5}>
    <Image src={logo}/>
    </HStack>
  )
}

export default LoginHeader