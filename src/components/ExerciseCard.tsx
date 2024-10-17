import {
  Box,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface ExerciseOtherDetails {
  exerciseType: string;
  targetBodyArea: string;
  exerciseLevel: string;
  exerciseCategory: string;
  equipmentRequired: string;
  exerciseDescription: string;
}

interface ExerciseCardProps {
  exerciseName: string;
  imageUrl: string;
  exerciseDetails: ExerciseOtherDetails;
}


const ExerciseCard = ({ exerciseName,imageUrl,exerciseDetails }: ExerciseCardProps) => {
  return (
    <>
        <Card
          backgroundColor="#fff"
          variant="elevated"
          height="auto"
          padding={5}
          mt={5}
          width="100%"
          
        >
          <Heading color="#000" size="md">{exerciseName}</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} width="100%">
            <Image
              src={imageUrl}
              boxSize={{ md: "200px", lg: "250px", xl: "300px" }}
              objectFit="contain" 
              
            />
            <VStack>
              {Object.entries(exerciseDetails).map(([key, value]) => (
                <React.Fragment key={key}>
                  <SimpleGrid
                    columns={{ md: 1, lg: 2, xl: 2 }}
                    color="#000"
                    mt={3}
                    width="100%"
                  >
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize={{ lg: "medium", xl: "large" }}
                      >
                        {key.replace(/([A-Z])/g, " $1")}
                      </Text>
                    </Box>
                    <Box>
                      <Text>{value}</Text>
                    </Box>
                  </SimpleGrid>
                </React.Fragment>
              ))}
            </VStack>
          </SimpleGrid>
        </Card>

    </>
  );
};

export default ExerciseCard;
