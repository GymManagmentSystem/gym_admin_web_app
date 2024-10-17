import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Card, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import { memberDataSchema } from "../components/MemberEditableForm";
import { MemberFormData } from "../components/MemberEditableForm";



const AddMemberPage = () => {
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberFormData>({
    resolver: zodResolver(memberDataSchema),
  });

  const navigation = useNavigate();

  const onsubmitFormData = (data:MemberFormData) => {
    console.log("button");
    navigation(`/addPayment/:${1011}`, { state: data });
  };

  return (
    <>
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
        <Heading color="#000" size={{ sm: "md", md: "lg", xl: "xl" }}>
          New Member Details
        </Heading>
        <Card backgroundColor="#fff" variant="elevated" padding={2}>
          <form onSubmit={handleSubmit(onsubmitFormData)}>
            <SimpleGrid
              width="100%"
              mt={5}
              gap={2}
              columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            >
              <TextInput
                textInputTitle="First Name"
                name="firstName"
                register={register}
                errors={errors.firstName}
                inputType="string"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Last Name"
                name="lastName"
                register={register}
                errors={errors.lastName}
                inputType="string"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Contact Number"
                name="contactNumber"
                register={register}
                errors={errors.contactNumber}
                inputType="number"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Email"
                name="email"
                register={register}
                errors={errors.email}
                inputType="string"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Home Address"
                name="address"
                register={register}
                errors={errors.address}
                inputType="string"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Age"
                name="age"
                register={register}
                errors={errors.age}
                inputType="number"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Weight"
                name="weight"
                register={register}
                errors={errors.weight}
                inputType="number"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Height"
                name="height"
                register={register}
                errors={errors.height}
                inputType="number"
                formType="addForm"
              />
            </SimpleGrid>

            <HStack justifyContent="space-between" mt={5}>
              <Button
                variant="outline"
                color="#F1B900"
                borderColor="#F1B900"
                padding={5}
                size={responsiveButtonSize}
                _hover={{ backgroundColor: "#F1B900", color: "#fff" }}
                onClick={() => navigation("/members")}
              >
                Back
              </Button>
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
        </Card>
      </Card>
    </>
  );
};

export default AddMemberPage;
