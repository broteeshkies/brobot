module.exports = {
    hooks: {
        'pre-commit': 'yarn pre-commit',
        'pre-push': 'yarn pre-push',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
};
