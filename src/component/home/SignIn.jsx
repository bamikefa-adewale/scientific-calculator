/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
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
import { Heading } from "./Heading";
import AuthConext from "../../context/authContext";

const defaultValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  matricNumber: "",
  agreedToTerms: false,
  yearLevel: "",
  department: "",
};
// eslint-disable-next-line react/prop-types
const SignIn = () => {
  const { handleRegisterModal, auth, onCloseModal } = useContext(AuthConext);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState(defaultValue);
  const [userDetails, setUserDetails] = useState(null);
  console.log(userDetails);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = " FullName is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.matricNumber)
      errors.matricNumber = "Matric Number is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.yearLevel) errors.yearLevel = "Select level is required";
    if (!formData.department)
      errors.department = "Select department is required";
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
      localStorage.setItem("usersDetals", JSON.stringify(formData));
      // Add your form submission logic here
      navigate("/Calculator");
    }
  };

  return (
    <Dialog
      size="xs"
      open={auth.loginModal}
      className=" shadow-none "
      handler={onCloseModal}
    >
      <div className="flex items-center px-4 ">
        <Card
          color="transparent"
          shadow={false}
          className="h-[600px]  overflow-y-auto p-4 overflow-x-hidden w-full"
        >
          <Heading
            text="Login"
            description=" Nice to meet you! Enter your details to Login."
          />

          <form
            className="mt-8 mb-2 mr-2 max-w-screen-lg  "
            // className="mt-8 mb-2 w-[15rem] max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-2 flex flex-col gap-2">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Full Name
              </Typography>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                size="lg"
                placeholder="Enter Your Name..."
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                error={formError.name}
              />
              {formError.name && (
                <Typography color="red" className="text-sm">
                  {formError.name}
                </Typography>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
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

              <Typography variant="h6" color="blue-grey" className="-mb-3">
                Department
              </Typography>
              <select
                name="department"
                id="#"
                value={formData.department}
                onChange={handleChange}
                className="!border-blue-gray-200 focus:!border-t-gray-900 rounded"
                error={!formError.department}
              >
                <option>Select Department</option>
                <option>Computer Science</option>
                <option>Artificial intelligence (AI)</option>
                <option> Software and Web Development</option>
                <option>Cyber Security</option>
                <option> Network and Cloud Computing</option>
              </select>
              {formError.department && (
                <Typography color="red" className="text-sm">
                  {formError.department}
                </Typography>
              )}
              <Typography variant="h6" color="blue-grey" className="-mb-3">
                Level
              </Typography>
              <select
                name="yearLevel"
                id="#"
                value={formData.yearLevel}
                onChange={handleChange}
                className="!border-blue-gray-200 focus:!border-t-gray-900 rounded"
                error={!formError.yearLevel}
              >
                <option>Please select</option>
                <option>ND-1 FT</option>
                <option>ND-2 FT</option>
                <option>ND-1 PT</option>
                <option>ND-2 PT</option>
                <option>HND-1 FT</option>
                <option>HND-2 FT</option>
              </select>
              {formError.yearLevel && (
                <Typography color="red" className="text-sm">
                  {formError.yearLevel}
                </Typography>
              )}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Matric Number
              </Typography>
              <Input
                name="matricNumber"
                type="matricNumber"
                value={formData.matricNumber}
                onChange={handleChange}
                size="lg"
                placeholder="Enter Your Matric Number"
                className="!border-blue-gray-200 focus:!border-t-gray-900 rounded"
                error={formData.matricNumber}
              />
              {formError.matricNumber && (
                <Typography color="red" className="text-sm">
                  {formError.matricNumber}
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
                className="!border-blue-gray-200 focus:!border-t-gray-900 rounded"
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
              <button onClick={handleRegisterModal} className="text-red-500">
                Register
              </button>
            </Typography>
          </form>
        </Card>
      </div>
    </Dialog>
  );
};
export default SignIn;
