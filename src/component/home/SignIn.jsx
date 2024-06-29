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
import { LoginSchema } from "../../utilitis/schema";
import { loginInputLists } from "../../contant/auth";
import { useLogin } from "../../hooks/useLogin";

const defaultValue = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValue,
  });

  const { isPending, mutate, error, isError } = useLogin();
  const { handleRegisterModal, auth, onCloseModal } = useContext(AuthConext);
  const onSubmit = (data) => {
    const values = {
      ...data,
      identifier: data?.email,
    };
    mutate(values);
  };

  const handleErrorMessage = (error) => {
    if (error?.response) {
      return error?.response?.data?.error?.message;
    }
    return null;
  };
  return (
    <Modal onClose={onCloseModal} isOpen={auth.loginModal}>
      <div className="flex items-center  ">
        <Card color="transparent" shadow={false} className="w-full">
          <Heading
            text="Login"
            description="Nice to meet you! Enter your details to create an account.."
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-2   p-2">
              {loginInputLists?.map((list) => (
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

            {isError ? (
              <div>
                <p className=" text-red-500 font-normal text-sm px-2">
                  {handleErrorMessage(error)}
                </p>
              </div>
            ) : null}
            <Button
              type="submit"
              className="mt-6 bg-deep-orange-800 hover:bg-gray-700"
              fullWidth
            >
              {isPending ? "Loading" : "Login"}
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
    </Modal>
  );
};
export default SignIn;
