import { z } from "zod";

export const SignUpSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required"),
  department: z.string().min(1, "Department is required"),
  level: z.string().min(1, "Level is required"),
  password: z.string().min(6, "Password Required"),
  matricNumber: z.string().min(1, "Matric Number is required"),
});
export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password Required"),
});
