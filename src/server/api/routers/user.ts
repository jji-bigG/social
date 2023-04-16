import registerSchema from "~/schemas/user/register.schema";
import { protectedProcedure, publicProcedure } from "../trpc";
import { createTRPCRouter } from "../trpc";
import { prisma } from "~/server/db";

export const user = createTRPCRouter({
  register: publicProcedure.input(registerSchema).query(({ input }) => {
    prisma.user.create({
      data: {},
    });
  }),
});
