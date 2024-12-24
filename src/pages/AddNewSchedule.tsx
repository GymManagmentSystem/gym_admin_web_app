import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { z } from "zod";
import TextInput from "../components/TextInput";
import SelectFeild from "../components/Select";
import TextArea from "../components/TextArea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

const scheduleSchema = z.object({
  scheduleType: z
    .string()
    .min(1, { message: "Schedule Type Should be Filled" }),
  scheduleDescription: z
    .string()
    .min(1, { message: "Schedule Description must be filled" }),
  scheduleRegisteredDate: z.string().date(),
  scheduleValidTime: z.number(),
  scheduleDays: z
    .string()
    .min(1, { message: "Must have at least one day per week" }),
  scheduleDay1: z
    .string()
    .min(1, { message: "Schedule Days Should be filled" }),
  scheduleDay2: z
    .string()
    .min(1, { message: "Schedule Days Should be filled" })
    .optional(),
  scheduleExpirayDate: z.string().date(),
  // exerciseName: z.string(),
  // exerciseRepitionUnit: z.string(),
  // sets: z.number().optional(),
  // reps: z.number().optional(),
  // duration: z.number().optional(),
});

export type ScheduleFormData = z.infer<typeof scheduleSchema>;

const AddNewSchedule = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      scheduleRegisteredDate: format(new Date(), "yyyy-MM-dd"),
      scheduleDay2:"None"
    },
  });

  const scheduleDurationInWeek = watch("scheduleDays");
  const scheduleValidTime = watch("scheduleValidTime");

  if (scheduleValidTime) {
    const currentDate = new Date(); // Get today's date
    const expiryDate = new Date(currentDate);
    expiryDate.setDate(currentDate.getDate() + scheduleValidTime * 7);
    const formattedExpiryDate = format(expiryDate, "yyyy-MM-dd");
    setValue("scheduleExpirayDate", formattedExpiryDate);
  }

  const mainCardContainerWidth = {
    sm: "100%",
    md: "90%",
    lg: "90%",
    xl: "90%",
  };
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const responsiveFontSize = { sm: "sm", md: "sm", lg: "md", xl: "md" };

  const onsubmitFormData = (data: ScheduleFormData) => {
    console.log("button is pressed");
    console.log(data);
  };

  return (
    <>
      <Box width="100%" height="100%" display="flex" justifyContent="center">
        <Card
          variant="elevated"
          backgroundColor="#fff"
          height="auto"
          width={mainCardContainerWidth}
          overflow={{ sm: "auto", md: "auto" }}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <CardBody display="flex" flexDirection="column" alignItems="center">
            <Box width="100%">
              {/* <HStack justifyContent="space-between">
                <Heading
                  color="#000"
                  size={responsiveFontSize}
                  fontWeight="600"
                >
                  Member Name : Kasun Rajitha
                </Heading>
                <Heading
                  color="#000"
                  size={responsiveFontSize}
                  fontWeight="600"
                >
                  Member Id : 1011
                </Heading>
              </HStack> */}
              <HStack justifyContent="flex-start">
                <Heading
                  color="#000"
                  size={responsiveFontSize}
                  fontWeight="600"
                >
                  Add New Schedule
                </Heading>
              </HStack>
            </Box>
            <Card
              height="auto"
              width="100%"
              backgroundColor="#fff"
              variant="elevated"
              mt={2}
            >
              <CardBody width="100%">
                <form onSubmit={handleSubmit(onsubmitFormData)}>
                  <SimpleGrid
                    width="100%"
                    mt={2}
                    gap={2}
                    columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <SelectFeild
                      selectArray={["Arms", "Legs", "Chest", "Cardio"]}
                      textInputTitle="Schedule Type"
                      name="scheduleType"
                      register={register}
                      errors={errors.scheduleType}
                      formType="addForm"
                    />

                    <TextInput
                      textInputTitle="Schedule Registered Date"
                      name="scheduleRegisteredDate"
                      register={register}
                      errors={errors.scheduleRegisteredDate}
                      inputType="string"
                      formType="addForm"
                    />

                    <TextInput
                      textInputTitle="Schedule Valid Time (Weeks)"
                      name="scheduleValidTime"
                      register={register}
                      errors={errors.scheduleValidTime}
                      inputType="number"
                      formType="addForm"
                    />

                    <TextInput
                      textInputTitle="Schedule Expiray Date"
                      name="scheduleExpirayDate"
                      register={register}
                      errors={errors.scheduleExpirayDate}
                      inputType="string"
                      formType="addForm"
                    />

                    <SelectFeild
                      selectArray={["1", "2"]}
                      textInputTitle="Schedule Days (No:of Days Per Week)"
                      name="scheduleDays"
                      register={register}
                      errors={errors.scheduleDays}
                      formType="addForm"
                    />

                    <SelectFeild
                      selectArray={[
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ]}
                      textInputTitle="Schedule Day 01"
                      name="scheduleDay1"
                      register={register}
                      errors={errors.scheduleDay1}
                      formType="addForm"
                    />

                    <SelectFeild
                      selectArray={[
                        "None",
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ]}
                      textInputTitle="Schedule Day 02"
                      name="scheduleDay2"
                      register={register}
                      errors={errors.scheduleDay2}
                      formType="addForm"
                      isDisable={scheduleDurationInWeek == "2" ? false : true}
                    />

                    <TextArea
                      textInputTitle="Schedule Description"
                      name="scheduleDescription"
                      register={register}
                      errors={errors.scheduleDescription}
                      formType="addForm"
                    />
                  </SimpleGrid>

                  <HStack justifyContent="flex-end" mt={5}>
                    <Button
                      variant="outline"
                      color="#F1B900"
                      borderColor="#F1B900"
                      padding={5}
                      size={responsiveButtonSize}
                      _hover={{ backgroundColor: "#F1B900", color: "#fff" }}
                      type="submit"
                    >
                      Next
                    </Button>
                  </HStack>
                </form>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default AddNewSchedule;
