/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Dialog,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { Heading } from "./Heading";
import AuthConext from "../../context/authContext";

const defaultValue = {
  email: "",
  password: "",
  confirmPassword: "",
  agreedToTerms: false,
};

// eslint-disable-next-line react/prop-types
const Register = () => {
  const { handleLoginModal, auth, onCloseModal } = useContext(AuthConext);
  const [formData, setFormData] = useState(defaultValue);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.confirmPassword)
      errors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!formData.agreedToTerms)
      errors.agreedToTerms = "You must agree to the terms";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Data Submitted:", formData);
      localStorage.setItem("usersDetails", JSON.stringify(formData));
      // Add your form submission logic here
      navigate("/Calculator");
    }
  };

  return (
    <Dialog
      size="xs"
      open={auth.registerModal}
      handler={onCloseModal}
      className="shadow-none h-[600px] overflow-y-auto overflow-x-hidden w-full"
    >
      <div className="flex items-center">
        <Card
          color="transparent"
          shadow={false}
          className="rounded-md shadow-md p-4"
        >
          <Heading text="Login" description=" " />

          <form
            className="mt-8 mb-2 w-[15rem] max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-2">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Your Email
              </Typography>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                placeholder="name@mail.com"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {formError.email && (
                <Typography color="red" className="text-xs">
                  {formError.email}
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="mb-2">
                Password
              </Typography>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {formError.password && (
                <Typography color="red" className="text-xs">
                  {formError.password}
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="mb-2">
                Confirm Password
              </Typography>
              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                size="lg"
                placeholder="********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {formError.confirmPassword && (
                <Typography color="red" className="text-xs">
                  {formError.confirmPassword}
                </Typography>
              )}
            </div>

            <Checkbox
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            {formError.agreedToTerms && (
              <Typography color="red" className="text-xs">
                {formError.agreedToTerms}
              </Typography>
            )}

            <Button
              type="submit"
              className="mt-6 bg-deep-orange-800 hover:bg-gray-700"
              fullWidth
            >
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <button onClick={handleLoginModal} className="text-red-500">
                Login
              </button>
            </Typography>
          </form>
        </Card>
      </div>
    </Dialog>
  );
};

export default Register;
