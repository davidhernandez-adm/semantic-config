module.exports = {
    branches: [
      "main", 
      "next",
      { name: "release-*", channel: "rc", prerelease: true },
      { name: "hotfix-*", channel: "hotfix", prerelease: true },
      { name: "feature-*", channel: "beta", prerelease: true }
    ],
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "@semantic-release/github",
      "@semantic-release/git",
      [
        "@semantic-release/exec",
        {
          "prepareCmd": "npm install && npm run build"
        }
      ]
    ],
    tagFormat: "v${version}"
  };
