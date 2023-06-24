import "./RegistrationForm.css";

import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>User Name:</label>
        <input
          type="text"
          placeholder="Enter User Name"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>User Name is required</span>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Only Number Format"
          name="phoneNumber"
          {...register("phoneNumber", {
            required: true,
            pattern: /^[0-9]{10}$/, //  10-digit phone number format
          })}
        />
        {errors.phoneNumber && <span>Invalid phone number</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email id"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email id is required</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Minimum 6 digit password"
          name="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && <span>Minimum 6 characters required</span>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Retype confirm password"
          name="confirmPassword"
          {...register("confirmPassword", {
            required: true,
            validate: {
              matchesPreviousPassword: (value) =>
                value === getValues("password"),
            },
          })}
        />
        {errors.confirmPassword && <span>Passwords do not match</span>}
      </div>

      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegistrationForm;
