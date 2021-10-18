const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: process.env.SONARQUBE_HOST || "http://localhost:9000",
    // token: "",
    options: {
      "sonar.projectName": "ChallengeSonar",
      "sonar.projectVersion": "0.0.1",
      "sonar.projectDescription": "SonarQube for Challenge",
      "sonar.projectKey": "ChallengeSonar",
      "sonar.sources":
        "./app.js, ./config/db.config.js, ./routes/developers.js",
        "sonar.javascript.lcov.reportPaths": "./coverage/lcov.info",
      // "sonar.inclusions": "./", // Entry point of your code
    },
  },
  () => {}
);
