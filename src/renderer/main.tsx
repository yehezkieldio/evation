import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ipcLink } from "electron-trpc/renderer";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppRouter } from "../api/router";

const trpcReact = createTRPCReact<AppRouter>();

function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpcReact.createClient({
            links: [ipcLink()],
        })
    );

    return (
        <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <HelloElectron />
            </QueryClientProvider>
        </trpcReact.Provider>
    );
}

function HelloElectron() {
    const { data } = trpcReact.helloWorld.useQuery({ text: "Electron" });

    if (!data) {
        return null;
    }

    return <div data-testid="greeting">{data.text}</div>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
