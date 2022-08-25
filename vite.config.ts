import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: process.env.NODE_ENV === "production" ? "/my-team-page/" : "./",
  };
});
