const program = require("commander");

const helpOptions = () => {
  // 增加自己的options
  program.option("create <projectName>", "help you create a Vue3 project");

  program.on("--help", function () {
    console.log("");
    console.log("Other:");
    console.log("  other options~");
  });
};

module.exports = helpOptions;

// 1.Buffer
// 2.理论: 事件循环(浏览器/Node)
