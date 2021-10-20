const path = require('path');
const requireAll = require('require-all');
const deepmerge = require('deepmerge')

function getConfig(configs, rule, userConfig) {
  if (!configs[rule]) {
    throw new Error(`Rule '${rule}' not Support!`);
  }

  return deepmerge(configs[rule], userConfig || {});
}

// ESLint
const eslint = requireAll({
  dirname: path.resolve(__dirname, 'eslint'),
})

exports.getESLintConfig = function (rule, userConfig) {
  return getConfig(eslint, rule, userConfig);
};

// commitlint
const commitlint = requireAll({
  dirname: path.resolve(__dirname, 'commitlint'),
});

exports.getCommitlintConfig = function (rule, customConfig) {
  return getConfig(commitlint, rule, customConfig);
};