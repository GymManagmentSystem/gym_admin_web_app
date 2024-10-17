import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react"
import { MemberFormData } from "./MemberEditableForm"
import { StaffFormData } from "./StaffEditableForm"
import { Path,UseFormRegister,FieldError } from "react-hook-form"
import { ExerciseFormData } from "../pages/AddExercisePage";


interface TextAreaProps<
  T extends MemberFormData | StaffFormData | ExerciseFormData
> {
  textInputTitle: string;
  name: Path<T>;
  isEditEnabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldError;
  formType: "editForm" | "addForm";
}

const TextArea = <
T extends MemberFormData | StaffFormData | ExerciseFormData
>({
    textInputTitle,
    name,
    register,
    errors,
    isEditEnabled,
    formType,
  }: TextAreaProps<T>) => {
  return (
    <FormControl isInvalid={!!errors}>
            <FormLabel
              color="#000"
              fontSize={{ sm: "smaller", md: "md", lg: "lg", xl: "lg" }}
            >
              {textInputTitle}
            </FormLabel>
            <Textarea
              size={{ sm: "xs", md: "sm", lg: "lg", xl: "lg" }}
              sx={{ border: "2px solid #E6E6E5" }}
              color="#000"
              _hover={{ borderColor: "#F1B900" }}
              width="100%"
              {...register(name)}
              isDisabled={formType == "addForm" ? false : !isEditEnabled}
            />
            {errors?.message && (
              <FormErrorMessage color="#f44336">
                {errors.message}
              </FormErrorMessage>
            )}
          </FormControl>
  )
}

export default TextArea