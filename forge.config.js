module.exports = {
    packagerConfig: {},
    rebuildConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {},
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin"],
        },
        {
            name: "@electron-forge/maker-deb",
            config: {},
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {},
        },
    ],
    plugins: [
        {
            name: "@electron-forge/plugin-vite",
            config: {
                build: [
                    {
                        entry: "src/main/main.ts",
                        config: "vite.main.config.mjs",
                    },
                    {
                        entry: "src/renderer/main.css",
                    },
                    {
                        entry: "src/preload/preload.ts",
                        config: "vite.preload.config.mjs",
                    },
                ],
                renderer: [
                    {
                        name: "main_window",
                        config: "vite.renderer.config.mjs",
                    },
                ],
            },
        },
    ],
};
