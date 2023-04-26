import { defineConfig } from 'astro/config'

// https://astro.build/config
import svelte from "@astrojs/svelte"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind({
            config: { applyBaseStyles: false }
        })
    ],
    base: "/childhood-cancer",
    outDir: "./dist/childhood-cancer",
    trailingSlash: "never",
});