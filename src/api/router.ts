import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create({ isServer: true });

export const router = t.router({
    helloWorld: t.procedure
        .input(
            z
                .object({
                    text: z.string(),
                })
                .nullish()
        )
        .query((options) => {
            return { text: `Hello, ${options.input?.text}!` };
        }),
});

export type AppRouter = typeof router;
