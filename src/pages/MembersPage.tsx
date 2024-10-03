import SearchHeadingBar from "../components/SearchHeadingBar"

const MembersPage = () => {
    const buttonPress=()=>{
        console.log('button pressed!')
    }
  return (
    <>
    <SearchHeadingBar buttonPressed={buttonPress}/>
    </>
  )
}

export default MembersPage