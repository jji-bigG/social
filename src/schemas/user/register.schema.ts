import { z } from "zod";

export default z
  .object({
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    email: z.string().email("Invalid Email"),

    password: z
      .string()
      .min(1, "Required Field")
      .min(8, "Min of 8 characters required"),
    confirmPassword: z
      .string()
      .min(1, "Required Field")
      .min(8, "Min of 8 characters required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
