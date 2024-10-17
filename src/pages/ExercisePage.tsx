import { Box, Card } from "@chakra-ui/react";
import SearchHeadingBar from "../components/SearchHeadingBar";
import { useNavigate } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";

const ExercisePage = () => {
  const navigate = useNavigate();
  const buttonPress = () => {
    navigate("/members/addMember");
  };

  const exercises = [
    {
      exerciseName: "Bench Press",
      imageUrl: "https://gymgeek.com/wp-content/uploads/2024/02/bench-press-square.png",
      exerciseDetails: {
        exerciseType: "Strength",
        targetBodyArea: "Chest",
        exerciseLevel: "Intermediate",
        exerciseCategory: "Compound",
        equipmentRequired: "Barbell, Bench",
        exerciseDescription:
          "The bench press is performed by lying on a flat bench with feet firmly on the ground. Grip the barbell with hands slightly wider than shoulder-width apart, lower the bar to your chest, and press it upwards until your arms are fully extended. Repeat for the desired number of reps.",
        
      },
    },
    {
      exerciseName: "Squats",
      imageUrl: "https://gymgeek.com/wp-content/uploads/2024/02/bench-press-square.png",
      exerciseDetails: {
        exerciseType: "Strength",
        targetBodyArea: "Legs",
        exerciseLevel: "Beginner",
        exerciseCategory: "Compound",
        equipmentRequired: "Barbell (optional), Bodyweight",
        exerciseDescription:
          "Stand with feet shoulder-width apart. Lower your body by bending your hips and knees, keeping your back straight and chest up, as if sitting in an imaginary chair. Lower until your thighs are parallel to the floor, then push through your heels to return to the starting position. Add weight with a barbell if desired.",
        
      },
    },
    {
      exerciseName: "Plank",
      imageUrl: "https://gymgeek.com/wp-content/uploads/2024/02/bench-press-square.png",
      exerciseDetails: {
        exerciseType: "Core",
        targetBodyArea: "Core",
        exerciseLevel: "Beginner",
        exerciseCategory: "Isometric",
        equipmentRequired: "None",
        exerciseDescription:
          "Begin in a push-up position, but rest on your forearms instead of your hands. Keep your body in a straight line from your head to your heels, engaging your core muscles. Hold the position for the desired amount of time without letting your hips sag or raise.",
      
      },
    },
    {
      exerciseName: "Deadlift",
      imageUrl: "https://gymgeek.com/wp-content/uploads/2024/02/bench-press-square.png",
      exerciseDetails: {
        exerciseType: "Strength",
        targetBodyArea: "Back",
        exerciseLevel: "Advanced",
        exerciseCategory: "Compound",
        equipmentRequired: "Barbell",
        exerciseDescription:
          "Stand with feet hip-width apart, with a barbell on the floor in front of you. Bend at the hips and knees to grip the barbell just outside your knees. Keep your back straight, push through your heels, and lift the bar to hip height by straightening your legs and extending your hips. Lower the bar back to the floor with control.",
        
      },
    },
    {
      exerciseName: "Jumping Jacks",
      imageUrl: "https://gymgeek.com/wp-content/uploads/2024/02/bench-press-square.png",
      exerciseDetails: {
        exerciseType: "Cardio",
        targetBodyArea: "Full Body",
        exerciseLevel: "Beginner",
        exerciseCategory: "Cardio",
        equipmentRequired: "None",
        exerciseDescription:
          "Start standing with your feet together and arms at your sides. Jump into the air, spreading your legs shoulder-width apart while simultaneously raising your arms above your head. Jump again to return to the starting position. Repeat in a rhythmic motion.",
      },
    },
  ];

  return (
    <Card
      backgroundColor="#fff"
      variant="elevated"
      padding={5}
      height="100%"
      overflow="auto"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <SearchHeadingBar
        buttonPressed={buttonPress}
        heading="Exercises"
        buttonText="Add Exercise"
      />
      {exercises.map((exercise)=>(
        <ExerciseCard exerciseName={exercise.exerciseName} imageUrl={exercise.imageUrl} exerciseDetails={exercise.exerciseDetails}/>
      ))}
    
      
      
    </Card>
  );
};

export default ExercisePage;
