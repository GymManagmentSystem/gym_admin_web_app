import { FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { PaymentFormData } from "../pages/AddPaymentPage";
import { Path, UseFormRegister, FieldError } from "react-hook-form";
import { ExerciseFormData } from "../pages/AddExercisePage";


interface SelectProps<T extends PaymentFormData | ExerciseFormData> {
  selectArray:string[]
  textInputTitle: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
  formType: "editForm" | "addForm";
}

const SelectFeild = <T extends PaymentFormData | ExerciseFormData>({
  textInputTitle,
  name,
  register,
  selectArray,
  errors,
}: SelectProps<T>) => {
  const responsiveSelectSize = { sm: "xs", md: "sm", lg: "lg", xl: "lg" };
  const responsiveLabelSize = { sm: "smaller", md: "md", lg: "lg", xl: "lg" };
  return (
    <FormControl>
      <FormLabel color="#000" fontSize={responsiveLabelSize}>
        {textInputTitle}
      </FormLabel>
      <Select
        {...register(name)}
        border="2px solid #E6E6E6"
        color="#000"
        _hover={{ borderColor: "#F1B900" }}
        width="100%"
        size={responsiveSelectSize}
      >
        {selectArray.map((selectOption) => (
          <option
            key={selectOption}
            value={selectOption}
            color="#000"
            style={{ backgroundColor: "#fff" }}
          >
            {selectOption}
          </option>
        ))}
      </Select>
      {
      errors?<FormErrorMessage>
        {errors.message}
      </FormErrorMessage>:null
      }
    </FormControl>
  );
};

export default SelectFeild;
