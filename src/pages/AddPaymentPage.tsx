import {
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MemberFormData } from "../components/MemberEditableForm";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectFeild from "../components/Select";
import useGetPackageDetails from "../hooks/useGetPackageDetails";
import useAddMember from "../hooks/useAddMember";
import { useQueryClient } from "@tanstack/react-query";
import useAddPayments from "../hooks/useAddPayments";


const paymentSchema = z.object({
  memberName: z.string(),
  packageType: z.string().min(1),
  paymentAmount: z.number({
    required_error: "Package Amount is required",
    invalid_type_error: "Package Amount must be a number",
  }),
  paymentDate: z.string().date(),
  paymentTime: z.string().time(),
  expirayDate: z.string().date(),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;

const AddPaymentPage = () => {
  const responsiveButtonSize = { sm: "sm", md: "sm", lg: "md", xl: "lg" };
  const responsiveHeadingSize = { sm: "md", md: "lg", xl: "xl" };

  const queryClient = useQueryClient();

  // calling hook to get package Data
  const { data: packagesList, error, isLoading } = useGetPackageDetails();
  const location = useLocation();
  const memberData = location.state as MemberFormData;
  const { id } = useParams(); //getting id from the routing parameters
  const memberId = id ? parseInt(id.substring(1), 10) : 0;
  const addMember = useAddMember();
  const addPayment = useAddPayments(memberId);
  
  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PaymentFormData>({
    defaultValues: {
      memberName: `${memberData.firstName}`,
      paymentDate: format(new Date(), "yyyy-MM-dd"),
      paymentTime: format(new Date(), "HH:mm:ss"),
      paymentAmount: 0,
      packageType: "",
    },
    resolver: zodResolver(paymentSchema),
  });

  //handlinn submitted data
  const onsubmitPaymentForm = (data: PaymentFormData) => {
    if (data.packageType == "membership") {
      const nameUpdatedMemberDate = {
        ...memberData,
        firstName: data.memberName,
      };
      const updatedMemberData = {
        ...nameUpdatedMemberDate,
        paymentDate: data.paymentDate,
        paymentTime: data.paymentTime,
        paymentAmount: data.paymentAmount,
        packageType: data.packageType,
        validity: true,
        expirayDate: data.expirayDate,
      };

      addMember.mutate(updatedMemberData, {
        onSuccess: (data) => {
          console.log(data);
          toast({
            title: "User Added Successful!",
            description: "User Added Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "yellow",
          });
          queryClient.invalidateQueries(["memberTableDetails"]);
          navigate("/app/dashbord");
        },

        onError: (error) => {
          console.log(
            `error has been occured:${
              error instanceof Error ? error.message : "unexpected error"
            }`
          );
          toast({
            title: "Error!",
            description:
              error instanceof Error ? error.message : "unexpected error",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "red",
          });
        },
      });
    } else {
      const paymentData = {
        memberId: memberData.memberId,
        paymentDate: data.paymentDate,
        paymentTime: data.paymentTime,
        paymentAmount: data.paymentAmount,
        packageType: data.packageType,
        validity: true,
        expirayDate: data.expirayDate,
      };

      addPayment.mutate(paymentData, {
        onSuccess: (data) => {
          toast({
            title: "Payment Successful!",
            description: "Payment Done Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "yellow",
          });
          queryClient.invalidateQueries(["paymentHistoryList", data.memberId]);
          navigate("/app/dashbord");
        },

        onError: (error) => {
          console.log(
            `error has been occured:${
              error instanceof Error ? error.message : "unexpected error"
            }`
          );
          toast({
            title: "Error!",
            description:
              error instanceof Error ? error.message : "unexpected error",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
            colorScheme: "red",
          });
        },
      });
    }
  };

  //keep the track of the changes done to packageType and change packageAmount and Expiaray date According to that
  const selectedPackageType = watch("packageType");

  if (selectedPackageType && packagesList) {
    const selectedPackage = packagesList.find(
      (pkg) => pkg.packageName === selectedPackageType
    );
    if (selectedPackage) {
      const currentDate = new Date(); // Get today's date
      const expiryDate = new Date(currentDate);
      expiryDate.setDate(
        currentDate.getDate() + selectedPackage.packageValidTime * 7
      );
      const formattedExpiryDate = format(expiryDate, "yyyy-MM-dd");
      setValue("expirayDate", formattedExpiryDate);
      setValue("paymentAmount", selectedPackage.packageAmount);
    }
  }

  if (error) {
    return error.message;
  }

  if (isLoading) {
    return isLoading;
  }

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
              name="paymentAmount"
              register={register}
              errors={errors.paymentAmount}
              inputType="number"
              formType="addForm"
            />

            <TextInput
              textInputTitle="Expiary Date"
              name="expirayDate"
              register={register}
              errors={errors.expirayDate}
              inputType="string"
              formType="addForm"
            />

            <SelectFeild
              selectArray={
                packagesList ? packagesList.map((pkg) => pkg.packageName) : []
              }
              textInputTitle="Package Type"
              name="packageType"
              register={register}
              errors={errors.packageType}
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
      </Card>
    </Card>
  );
};

export default AddPaymentPage;
