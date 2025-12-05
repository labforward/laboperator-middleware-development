import { defineConfig } from "eslint/config";
import middlewareConfig from "middleware-development/eslint.config"

export default defineConfig(
  middlewareConfig,
  { ignores: ["dist", "storage"] },
);
