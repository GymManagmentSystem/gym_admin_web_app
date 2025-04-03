import GraphsContainer from "../components/GraphsContainer";
import TopHomeCardContainer from "../components/TopHomeCardContainer";
import useDashBordData from "../hooks/useGetDashBordData";



const HomeDashbord = () => {
  
  const { data: dashBordData, error:dashBordDataError, isLoading:dashBordIsLoading } = useDashBordData();
   


  return (
    <>
      {dashBordData && (
        <>
          <TopHomeCardContainer
            exerciseCount={dashBordData.exerciseCount}
            memberStatusCount={dashBordData.memberStatusCount}
            positionCount={dashBordData.positionCount}
          />
          <GraphsContainer dataList1={dashBordData.monthlyPackageCount} dataList2={dashBordData.monthlyIncome}/>
        </>
      )}
    </>
  );
};

export default HomeDashbord;
