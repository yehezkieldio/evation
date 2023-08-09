import { useState } from "react";
import { ipcLink } from "electron-trpc/renderer";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppRouter } from "../../../api/router";
import Routes from "./_routes";

const trpcReact = createTRPCReact<AppRouter>();

export function Root() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpcReact.createClient({
            links: [ipcLink()],
        })
    );

    return (
        <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
        </trpcReact.Provider>
    );
}
