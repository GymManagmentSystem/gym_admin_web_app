import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { MemberAddFormData } from "./AddMemberPage";
import { zodResolver } from "@hookform/resolvers/zod";

const paymentSchema = z.object({
  memberName: z.string(),
  packageType: z.string().min(1),
  packageAmount: z.number({
    required_error: "Package Amount is required",
    invalid_type_error: "Package Amount must be a number",
  }),
  paymentDate: z.string().date(),
  paymentTime: z.string().time(),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;

const AddPaymentPage = () => {
    
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const responsiveSelectSize = { sm: "xs", md: "sm", lg: "lg", xl: "lg" };
  const responsiveLabelSize = { sm: "smaller", md: "md", lg: "lg", xl: "lg" };
  const responsiveHeadingSize = { sm: "md", md: "lg", xl: "xl" };

  const packageTypes = [
    "Membership",
    "Full Time",
    "One Month",
    "3 Months",
    "6 Months",
    "One Year",
  ];
  const location = useLocation();
  const memberData = location.state as MemberAddFormData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    defaultValues: {
      memberName: `${memberData.firstName}`,
      paymentDate: format(new Date(), "yyyy-MM-dd"),
      paymentTime: format(new Date(), "HH:mm:ss"),
      packageAmount: undefined,
      packageType: "",
    },
    resolver: zodResolver(paymentSchema),
  });

  const onsubmitPaymentForm = (data: PaymentFormData) => {
    const nameUpdatedMemberDate = {
      ...memberData,
      firstName: data.memberName,
    };
    const updatedMemberData = {
      ...nameUpdatedMemberDate,
      paymentDate: data.paymentDate,
      paymentTime: data.paymentTime,
      packageAmount: data.packageAmount,
      packageType: data.packageType,
    };
    console.log(updatedMemberData);
  };

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
      <Heading color="#000" size={responsiveHeadingSize}>
        Payment Details
      </Heading>
      <Card backgroundColor="#fff" variant="elevated" padding={2}>
        <form onSubmit={handleSubmit(onsubmitPaymentForm)}>
          <SimpleGrid
            width="100%"
            mt={5}
            gap={2}
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <TextInput
              textInputTitle="Member Name"
              name="memberName"
              register={register}
              errors={errors.memberName}
              inputType="string"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Date"
              name="paymentDate"
              register={register}
              errors={errors.paymentDate}
              inputType="string"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Time"
              name="paymentTime"
              register={register}
              errors={errors.paymentTime}
              inputType="string"
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

            <FormControl>
              <FormLabel color="#000" fontSize={responsiveLabelSize}>
                PackageType
              </FormLabel>
              <Select
                {...register("packageType")}
                border="2px solid #E6E6E6"
                color="#000"
                _hover={{ borderColor: "#F1B900" }}
                width="100%"
                size={responsiveSelectSize}
              >
                {packageTypes.map((pkgType) => (
                  <option
                    key={pkgType}
                    value={pkgType}
                    color="#000"
                    style={{ backgroundColor: "#fff" }}
                  >
                    {pkgType}
                  </option>
                ))}
              </Select>
            </FormControl>
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
      </Card>
    </Card>
  );
};

export default AddPaymentPage;
