import React, { useState } from "react";
import { Auth } from "aws-amplify";

const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signUp",
};

function Signin() {
  const [formState, updateFormState] = useState(initialFormState);

  function onChange(e) {
    e.persist();
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const { formType } = formState;

  async function signUp() {
    try {
      const { username, email, password } = formState;
      await Auth.signUp({ username, password, attributes: { email } });
      updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
    } catch (error) {
      alert("error to signup");
    }
  }
  async function confirmSignUp() {
    try {
      const { username, authCode } = formState;
      await Auth.confirmSignUp({ username, authCode });
      updateFormState(() => ({ ...formState, formType: "signIn" }));
    } catch (error) {
      console.log(error);
    }
  }
  async function signIn() {
    try {
      const { username, password } = formState;
      await Auth.signIn({ username, password });
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
    } catch (error) {
      alert("Error sign in");
    }
  }

  return (
    <div>
      {formType === "signUp" && (
        <div>
          <input name="username" onChange={onChange} placeholder="username" />
          <input
            type="password"
            name="password"
            onChange={onChange}
            placeholder="password"
          />
          <input name="email" onChange={onChange} placeholder="email" />
          <button onClick={signUp}>Sign Up</button>
        </div>
      )}

      {formType === "confirmSignUp" && (
        <div>
          <input
            name="authCode"
            onChange={onChange}
            placeholder="confirmation code"
          />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      )}

      {formType === "signIn" && (
        <div>
          <input name="username" onChange={onChange} placeholder="username" />
          <input name="password" onChange={onChange} placeholder="password" />

          <button onClick={signIn}>Sign In</button>
        </div>
      )}

      {formType === "signedIn" && <h1>Hello World</h1>}
    </div>
  );
}

export default Signin;
