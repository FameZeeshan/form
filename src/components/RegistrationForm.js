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
    // Perform any necessary actions with the form data
    console.log(data);
    // Show registration success pop-up
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          {...register("phoneNumber", {
            required: true,
            pattern: /^[0-9]{10}$/, // Assuming a 10-digit phone number format
          })}
        />
        {errors.phoneNumber && <span>Invalid phone number</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && <span>Minimum 6 characters required</span>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
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

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
