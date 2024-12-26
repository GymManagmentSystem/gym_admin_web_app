import { Button, Card, Heading, HStack, SimpleGrid } from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const packageSchema = z.object({
  packageName: z.string().min(1, { message: "Package Name required" }),
  packageDescription: z
    .string()
    .min(1, { message: "Package Description required" }),
  packageValidTime: z
    .number()
    .nonnegative({ message: "Value should not be negative" }),
  packageAmount: z
    .number()
    .nonnegative({ message: "Value should not be negative" }),
});

export type PackageFormDta = z.infer<typeof packageSchema>;

const AddPackagePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PackageFormDta>({
    resolver: zodResolver(packageSchema),
  });

  const onSubmitPackageFormData = (data: PackageFormDta) => {
    console.log(data);
  };
  

  const navigation=useNavigate()
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };

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
          New Exercise Details
        </Heading>
        <Card backgroundColor="#fff" variant="elevated" padding={2}>
          <form onSubmit={handleSubmit(onSubmitPackageFormData)}>
            <SimpleGrid
              width="100%"
              mt={5}
              gap={2}
              columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            >
              <TextInput
                textInputTitle="Package Name"
                name="packageName"
                register={register}
                errors={errors.packageName}
                inputType="string"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Package Valid Time (Months)"
                name="packageValidTime"
                register={register}
                errors={errors.packageValidTime}
                inputType="number"
                formType="addForm"
              />

              <TextInput
                textInputTitle="Package Amount"
                name="packageAmount"
                register={register}
                errors={errors.packageAmount}
                inputType="number"
                formType="addForm"
              />

              <TextArea
                textInputTitle="Package Description"
                name="packageDescription"
                errors={errors.packageDescription}
                register={register}
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
                onClick={() => navigation("/app/packages")}
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

export default AddPackagePage;
