import { spawn } from "node:child_process";
import { join } from "node:path";

const command = join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "astro.cmd" : "astro"
);
const args = process.argv.slice(2);

const child = process.platform === "win32"
  ? spawn("cmd.exe", ["/d", "/s", "/c", command, ...args], {
      stdio: "inherit",
      env: {
        ...process.env,
        ASTRO_TELEMETRY_DISABLED: "1"
      }
    })
  : spawn(command, args, {
  stdio: "inherit",
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1"
  }
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
