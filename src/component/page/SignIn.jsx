/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import Register from "./Register";
const SignIn = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });

  const handleOpen = () => setOpen((cur) => !cur);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
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
      // Add your form submission logic here
      navigate("/Calculator");
    }
  };

  return (
    <>
      <div onClick={handleOpen}>Login</div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className=" shadow-none "
      >
        <div className="flex items-center  mx-auto ">
          <Card
            color="transparent"
            shadow={false}
            className="rounded-md shadow-md p-6"
          >
            <Typography variant="h4" className="text-[#ff6600]">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to Login.
            </Typography>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              <div className="mb-1 flex flex-col gap-2">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  size="lg"
                  placeholder="Enter Your Name..."
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  error={!!formError.name}
                />
                {formError.name && (
                  <Typography color="red" className="text-sm">
                    {formError.name}
                  </Typography>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="lg"
                  placeholder="Enter Your Email"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  error={formError.email}
                />
                {formError.email && (
                  <Typography color="red" className="text-sm">
                    {formError.email}
                  </Typography>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  size="lg"
                  placeholder="Enter Your PassWord"
                  className="!border-blue-gray-100 focus:!border-deep-orange-800"
                  error={formData.password}
                />
                {formError.password && (
                  <Typography color="red" className="text-sm">
                    {formError.password}
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
                    color="orange"
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
                error={formData.agreedToTerms}
              />
              {formError.agreedToTerms && (
                <Typography color="red" className="text-sm">
                  {formError.agreedToTerms}
                </Typography>
              )}
              <Button
                type="submit"
                className="mt-6 bg-deep-orange-800 hover:bg-gray-700"
                fullWidth
              >
                Login
              </Button>
              <Typography
                color="gray"
                className="mt-4 text-center font-normal flex justify-center gap-2"
              >
                No existing account?
                <Link to="" className="font-medium text-[#ff6600]">
                  <Register />
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </Dialog>
    </>
  );
};
export default SignIn;
