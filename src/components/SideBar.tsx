import { VStack } from "@chakra-ui/react";
import SideBarLink from "./SideBarLink";
import dashBordLogo from "../assets/dashboard (1).png";
import scheduleLogo from "../assets/schedule.png";
import membersLogo from "../assets/members.png";
import exerciseLogo from "../assets/exercise.png";
import staffLogo from "../assets/staff.png";
import announcementLogo from "../assets/announcement.png";
import pricingLogo from "../assets/pricing.png";
import chatLogo from "../assets/chat.png";
import logOutLogo from "../assets/logout.png";

const SideBar = () => {
  return (
    <VStack width="100%" padding={2} style={{ backgroundColor: "#fff" }}>
      <SideBarLink
        imageSrc={dashBordLogo}
        title="Dashbord"
        path="/app/dashbord"
      />
      <SideBarLink
        imageSrc={scheduleLogo}
        title="Schedule"
        path="/app/schedule"
      />
      <SideBarLink imageSrc={membersLogo} title="Members" path="/app/members" />
      <SideBarLink
        imageSrc={exerciseLogo}
        title="Exercise"
        path="/app/exercises"
      />
      <SideBarLink imageSrc={staffLogo} title="Staff" path="/app/staff" />
      <SideBarLink
        imageSrc={announcementLogo}
        title="Annoncement"
        path="/app"
      />
      <SideBarLink imageSrc={pricingLogo} title="Pricing" path="/app" />
      <SideBarLink imageSrc={chatLogo} title="Chats" path="/app" />
      <SideBarLink imageSrc={logOutLogo} title="Log Out" path="/app" />
    </VStack>
  );
};

export default SideBar;
