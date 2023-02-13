import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInputField from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer, Title } from "./sign-up.styles.jsx";

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
        await createUserDocumentFromAuth(user, { displayName });
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
    <SignUpContainer>
      <Title>don't have an account?</Title>
      <span>sign up with email and password</span>
      <form method="get" onSubmit={submitHandler}>
        <FormInputField
          label="full name"
          fieldId="name-input"
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <FormInputField
          label="email address"
          fieldId="email-input"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />

        <FormInputField
          label="password"
          fieldId="password-input"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />

        <FormInputField
          label="confirm password"
          fieldId="cpassword-input"
          type="password"
          onChange={changeHandler}
          name="cpassword"
          value={cpassword}
          required
        />

        <Button type="submit" name="Sign Up" />
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
