import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const chatRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.message.create({
        data: {
          content: input.content,
          authorName: ctx.session.user.name as string,
          authorImage: ctx.session.user.image as string,
        },
      });
    }),
});
