import { Heading, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'



interface Exercise{
    exerciseName:string,
    reps:string,
    sets:string
}

interface ScheduleExercise{
        scheduleNo:number,
        scheduleType:string,
        schedule:Exercise[]   
}
interface ScheduleExerciseTableProps{
    scheduleArray:ScheduleExercise[]
}


const ScheduleExerciseTable = ({scheduleArray: exerciseArray}:ScheduleExerciseTableProps) => {
    const responsiveHeadingSize={sm:"xs",md:"sm",lg:"md",xl:"lg"}
    const responsiveTableWidth={sm:"100%"}
    const responsiveTableSize={sm:"sm",md:"md",lg:"lg",xl:"lg"}
  return (
    <>
    {exerciseArray.map((exerciseDetail)=>(
        <TableContainer width={responsiveTableWidth} mt={5}>
        <HStack justifyContent="space-between" mt={2} mb={2}> 
            <Heading color="#000" fontWeight="600" size={responsiveHeadingSize}>Schedule No : {exerciseDetail.scheduleNo}</Heading>
            <Heading color="#000" fontWeight="600" size={responsiveHeadingSize}>Schedule Type : {exerciseDetail.scheduleType}</Heading>
        </HStack>
            <Table size={responsiveTableSize}>
            <Thead backgroundColor="#FFF8DF">
                <Tr>
                    <Th>Exercise</Th>
                    <Th>Reps</Th>
                    <Th>Sets</Th>
                </Tr>
            </Thead>
            <Tbody color="#000">
                {exerciseDetail.schedule.map((details,index)=>(
                    <Tr key={index}>
                    <Td>{details.exerciseName}</Td>
                    <Td>{details.reps}</Td>
                    <Td>{details.sets}</Td>
                </Tr>
    
                ))}            
            </Tbody>
            </Table>
        </TableContainer>
    ))}
    
    </>
  )
}

export default ScheduleExerciseTable