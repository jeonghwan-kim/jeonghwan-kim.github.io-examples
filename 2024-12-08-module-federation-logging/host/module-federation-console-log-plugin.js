const path = require("path");
const fs = require("fs");

class ModuleFederationConsoleLogPlugin {
  #logFile = path.join(process.cwd(), ".mf/typesGenerate.log");
  #name = "ModuleFederationConsoleLogPlugin";

  apply(compiler) {
    // 로그 파일 비우기
    compiler.hooks.watchRun.tap(this.#name, () => {
      fs.truncateSync(this.#logFile, 0);
    });

    // 로그 파일 검사, 출력
    compiler.hooks.done.tap(this.#name, () => {
      if (!fs.existsSync(this.#logFile)) {
        return;
      }
      if (fs.statSync(this.#logFile).size === 0) {
        return;
      }

      const log = fs.readFileSync(this.#logFile, "utf8");
      if (!log) {
        return;
      }

      console.log(log);
    });
  }
}

module.exports = ModuleFederationConsoleLogPlugin;
