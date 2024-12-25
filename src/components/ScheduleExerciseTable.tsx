import { HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { ScheduleDetails } from '../hooks/useAddSchedule'
           

interface ScheduleExerciseTableProps{
    scheduleArray:ScheduleDetails[]
}


const ScheduleExerciseTable = ({scheduleArray: exerciseArray}:ScheduleExerciseTableProps) => {
    const responsiveHeadingSize={sm:"xs",md:"sm",lg:"md",xl:"md"}
    const responsiveTableWidth={sm:"100%"}
    const responsiveTableSize={sm:"sm",md:"md",lg:"lg",xl:"lg"}
  return (
    <>
    {exerciseArray.map((exerciseDetail)=>(
        <TableContainer width={responsiveTableWidth} mt={5}>
        <HStack justifyContent="space-between" mt={2} mb={2}> 
            <Text color="#000" fontWeight="600" size={responsiveHeadingSize}>Schedule No : {exerciseDetail.schedule.scheduleId}</Text>
            <Text color="#000" fontWeight="600" size={responsiveHeadingSize}>Schedule Type : {exerciseDetail.schedule.scheduleType}</Text>
        </HStack>
            <Table size={responsiveTableSize}>
            <Thead backgroundColor="#FFF8DF">
                <Tr>
                    <Th color="#000">Exercise</Th>
                    <Th color="#000">Reps</Th>
                    <Th color="#000">Sets</Th>
                    <Th color="#000">Duration</Th>
                </Tr>
            </Thead>
            <Tbody color="#000">
                {exerciseDetail.exerciseList.map((details,index)=>(
                    <Tr key={index}>
                    <Td>{details.exerciseName}</Td>
                    <Td>{details.reps}</Td>
                    <Td>{details.sets}</Td>
                    <Td>{details.duration}</Td>
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