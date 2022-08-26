import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: process.env.NODE_ENV === "production" ? "/dev-challenges-my-team-page/" : "./",
  };
});
