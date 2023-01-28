import "./form-input.styles.scss";

const FormInputField = ({ label, fieldId, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" id={fieldId} {...otherProps} />
      <label
        htmlFor={fieldId}
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInputField;
