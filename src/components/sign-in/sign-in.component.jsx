import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInputField from "../form-input/form-input.component";
import {
  signInUserWithEmailandPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, Title, ButtonsContainer } from "./sign-in.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) alert("Please enter a valid email address");
    else if (!validatePassword(password)) alert("Please check your password");
    else {
      try {
        await signInUserWithEmailandPassword(email, password);
        resetForm();
        navigate("/");
      } catch (error) {
        console.log(error.code, error.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      navigate("/");
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const validateEmail = (email) => /^[^@]+@\w+(\.\w+)+\w$/.test(email);

  const validatePassword = (password) => (password.length >= 6 ? true : false);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <Title>already have an account?</Title>
      <span>sign in with email and password</span>
      <form method="get" onSubmit={submitHandler}>
        <FormInputField
          label="email address"
          fieldId="signIn-email-input"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <FormInputField
          label="password"
          fieldId="signIn-password-input"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit" name="Sign In" />
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            name="Google Sign In"
            onClick={signInWithGoogle}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
