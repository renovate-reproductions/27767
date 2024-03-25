module.exports = {
  "username": "fdw",
  "platform": "github",
  "dependencyDashboard": false,
  "onboarding": false,
  "updateLockFiles": true,
  "autodiscover": true,
  "autodiscoverFilter": ['fdw/renovate-reproduction'],
  "rollbackPrs": true,
  "printConfig": false,
  "githubTokenWarn": false,
  "forkProcessing": "disabled",
  "requireConfig": "optional",
  "rangeStrategy": "bump",
  "rebaseWhen": "behind-base-branch",
  "commitMessageAction": "Renovate update",
  "globalExtends": ["group:monorepos", "group:recommended"],
  "packageRules": [
    {
      "depTypeList": ["peerDependencies"],
      "enabled": false
    },
    {
      "matchPackagePatterns": ["^FluentValidation.*"],
      "groupName": "FluentValidation"
    },
    {
      "matchSourceUrls": ["https://github.com/dotnet/reactive"],
      "groupName": ".NET Reactive extensions"
    },
    {
      "matchDatasources": ["npm"],
      "matchPackagePatterns": ["^@reduxjs/", "react-redux"],
      "groupName": "Reduxjs"
    },
    {
      "matchUpdateTypes": ["minor", "patch"],
      "groupName": "Non-major"
    },
  ]
};
