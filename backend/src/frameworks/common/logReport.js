class LogReport {
  static log(className, line, message) {
    console.info(`✔️ log → Class name: ${className} - Line: ${line}`);
    console.info(`✔️ log → Message: ${message}`);
  }

  static error(className, line, message) {
    console.error(`❌ error → Class name: ${className} - Line${line}`);
    console.error(`❌ error → Message: ${message}`);
  }
}

module.exports = {LogReport};
