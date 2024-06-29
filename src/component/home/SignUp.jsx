/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Heading } from "./Heading";
import AuthConext from "../../context/authContext";
import { useSignUp } from "../../hooks/useSignUp";
import { CustomInput } from "../CustomInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SignUpSchema } from "../../utilitis/schema";
import { inputLists } from "../../contant/auth";

const defaultValue = {
  fullName: "",
  email: "",
  password: "",
  matricNumber: "",
  term: false,
  level: "",
  department: "",
};

// eslint-disable-next-line react/prop-types
const SignUp = () => {
  const [term, setTerm] = useState(false);

  const handleChange = (e) => {
    const { checked } = e.target;
    setTerm(checked);
  };
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValue,
  });

  const { isPending, mutate } = useSignUp();
  const { handleRegisterModal, handleLoginModal, auth, onCloseModal } =
    useContext(AuthConext);
  const onSubmit = (data) => {
    if (!term) return toast.error("Terms and condition required");
    const values = {
      ...data,
      username: data.fullName,
      term,
    };
    mutate(values);
  };
  return (
    <Modal onClose={onCloseModal} isOpen={auth.registerModal}>
      <div className="flex items-center  ">
        <Card color="transparent" shadow={false} className="w-full">
          <Heading
            text="Register"
            description="Nice to meet you! Enter your details to create an account.."
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-2 h-[300px] overflow-y-auto p-2">
              {inputLists?.map((list) => (
                <CustomInput
                  key={list.name}
                  name={list.name}
                  label={list.label}
                  control={control}
                  placeholder={list.placeholder}
                  type={list.type}
                  options={list.options}
                />
              ))}
            </div>

            <Checkbox
              name="term"
              checked={term ? true : false}
              onChange={handleChange}
              label={
                <span>
                  I agree to the
                  <Link
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </Link>
                </span>
              }
            />
            <Button
              type="submit"
              className="mt-6 bg-deep-orange-800 hover:bg-gray-700"
              fullWidth
            >
              {isPending ? "Loading" : "Register"}
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal flex justify-center gap-2"
            >
              No existing account?
              <button onClick={handleLoginModal} className="text-red-500">
                Login
              </button>
            </Typography>
          </form>
        </Card>
      </div>
    </Modal>
  );
};
export default SignUp;
