import { useState, useContext } from "react";
import FormInputField from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";
import {
  signInUserWithEmailandPassword,
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
  getUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) alert("Please enter a valid email address");
    else if (!validatePassword(password)) alert("Please check your password");
    else {
      try {
        const { user } = await signInUserWithEmailandPassword(email, password);
        const userData = await getUserDocumentFromAuth(user);
        setCurrentUser(user);
        console.log(userData);
        resetForm();
      } catch (error) {
        console.log(error.code, error.message);
      }
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const validateEmail = (email) => /^[^@]+@\w+(\.\w+)+\w$/.test(email);

  const validatePassword = (password) => (password.length >= 6 ? true : false);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email and password</span>
      <form method="get" onSubmit={submitHandler}>
        <FormInputField
          label="Email Address"
          fieldId="signIn-email-input"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <FormInputField
          label="Password"
          fieldId="signIn-password-input"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit" name="Sign In" />
          <Button
            type="button"
            buttonType="google"
            name="Google Sign In"
            onClick={logGoogleUser}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
