import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInputField from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  cpassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, cpassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      alert("Passwords do not match");
    } else if (!validateEmail(email)) {
      alert("Invalid Email Address");
    } else if (!validatePassword(password)) {
      alert("Password length must be atleast 6 characters");
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await creatUserDocumentFromAuth(user, { displayName });
        resetForm();
      } catch (error) {
        console.log(error.code, error.message);
      }
    }
  };

  const validateEmail = (email) => /^[^@]+@\w+(\.\w+)+\w$/.test(email);

  const validatePassword = (password) => (password.length >= 6 ? true : false);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form method="get" onSubmit={submitHandler}>
        <FormInputField
          label="Full Name"
          fieldId="name-input"
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <FormInputField
          label="Email Address"
          fieldId="email-input"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />

        <FormInputField
          label="Password"
          fieldId="password-input"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />

        <FormInputField
          label="Confirm Password"
          fieldId="cpassword-input"
          type="password"
          onChange={changeHandler}
          name="cpassword"
          value={cpassword}
          required
        />

        <Button type="submit" name="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
