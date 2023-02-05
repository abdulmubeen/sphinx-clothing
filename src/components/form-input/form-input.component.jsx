import { FormGroup, FormInput, FormInputLabel } from "./form-input.styles.jsx";

const FormInputField = ({ label, fieldId, ...otherProps }) => {
  return (
    <FormGroup>
      <FormInput id={fieldId} {...otherProps} />
      <FormInputLabel htmlFor={fieldId} shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
    </FormGroup>
  );
};

export default FormInputField;
