const fs = require("fs");
const path = require("path");
require("dotenv").config();

const packageJsonPath = path.resolve(__dirname, "../package.json");
const envVersion = process.env.VITE_APP_VERSION;

if (!envVersion) {
  console.error("VITE_APP_VERSION is not defined in the .env file");
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.version = envVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
console.log(`Updated package.json version to ${envVersion}`);
