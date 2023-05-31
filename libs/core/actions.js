const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
let open;
import("open").then((res) => {
  open = res.default;
});
const { commandSpawn } = require("../utils/terminal");

const { vueRepo } = require("../config/repo.config");
const createProjectAction = async (project) => {
  console.log("hvvue help you create project~");
  await download(vueRepo, project, { clone: true });
  console.log("clone success~");
  const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });
  commandSpawn(command, ["run", "dev"], { cwd: `./${project}` });
  open("http://127.0.0.1:5173/");
};
module.exports = {
  createProjectAction,
};
