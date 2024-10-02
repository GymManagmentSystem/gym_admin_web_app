import {VStack } from '@chakra-ui/react'
import SideBarLink from './SideBarLink'
import dashBordLogo from '../assets/dashboard (1).png'
import scheduleLogo from '../assets/schedule.png'
import membersLogo from '../assets/members.png'
import exerciseLogo from '../assets/exercise.png'
import staffLogo from '../assets/staff.png'
import announcementLogo from '../assets/announcement.png'
import pricingLogo from '../assets/pricing.png'
import chatLogo from '../assets/chat.png'
import logOutLogo from '../assets/logout.png'


const SideBar = () => {
  return (
    <VStack width="100%" padding={2} style={{backgroundColor:'#fff'}}>
        <SideBarLink imageSrc={dashBordLogo} title='Dashbord'/>
        <SideBarLink imageSrc={scheduleLogo} title='Schedule'/>
        <SideBarLink imageSrc={membersLogo} title='Members'/>
        <SideBarLink imageSrc={exerciseLogo} title='Exercise'/>
        <SideBarLink imageSrc={staffLogo} title='Staff'/>
        <SideBarLink imageSrc={announcementLogo} title='Annoncement'/>
        <SideBarLink imageSrc={pricingLogo} title='Pricing'/>
        <SideBarLink imageSrc={chatLogo} title='Chats'/>
        <SideBarLink imageSrc={logOutLogo} title='Log Out'/>
    </VStack>
  )
}

export default SideBar