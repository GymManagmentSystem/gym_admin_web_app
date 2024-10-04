import {Box, VStack } from '@chakra-ui/react'
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
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <VStack width="100%" padding={2} style={{backgroundColor:'#fff'}}>
        <SideBarLink  imageSrc={dashBordLogo} title='Dashbord' path='/'/>
        <SideBarLink imageSrc={scheduleLogo} title='Schedule' path='/'/>
        <SideBarLink imageSrc={membersLogo} title='Members' path='/members'/>
        <SideBarLink imageSrc={exerciseLogo} title='Exercise' path='/'/>
        <SideBarLink imageSrc={staffLogo} title='Staff' path='/staff'/>
        <SideBarLink imageSrc={announcementLogo} title='Annoncement' path='/'/>
        <SideBarLink imageSrc={pricingLogo} title='Pricing' path='/'/>
        <SideBarLink imageSrc={chatLogo} title='Chats' path='/'/>
        <SideBarLink imageSrc={logOutLogo} title='Log Out' path='/'/>
    </VStack>
  )
}

export default SideBar