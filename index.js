#!/usr/bin/env node
const helpOptions = require("./libs/core/help");
const createCommands = require("./libs/core/create");
const program = require("commander");
program.version(require("./package.json").version);
// 增加自己的options
helpOptions();
createCommands();
program.parse(process.argv);
