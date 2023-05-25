const utils = require('../utils/utils');

// validateactor
const CREATENEWVERSION__VALIDATEACTOR__GET_USER_PERMISSIONS__ADMIN__STEP_MOCK = utils.createMockStep(
    'Get user permissions',
    'Get user permissions',
    'VALIDATEACTOR',
    [],
    ['GITHUB_TOKEN'],
    {PERMISSION: 'admin'},
);
const CREATENEWVERSION__VALIDATEACTOR__GET_USER_PERMISSIONS__WRITE__STEP_MOCK = utils.createMockStep(
    'Get user permissions',
    'Get user permissions',
    'VALIDATEACTOR',
    [],
    ['GITHUB_TOKEN'],
    {PERMISSION: 'write'},
);
const CREATENEWVERSION__VALIDATEACTOR__GET_USER_PERMISSIONS__NONE__STEP_MOCK = utils.createMockStep(
    'Get user permissions',
    'Get user permissions',
    'VALIDATEACTOR',
    [],
    ['GITHUB_TOKEN'],
    {PERMISSION: 'read'},
);
const CREATENEWVERSION__VALIDATEACTOR__ADMIN__STEP_MOCKS = [
    CREATENEWVERSION__VALIDATEACTOR__GET_USER_PERMISSIONS__ADMIN__STEP_MOCK,
];
const CREATENEWVERSION__VALIDATEACTOR__WRITER__STEP_MOCKS = [
    CREATENEWVERSION__VALIDATEACTOR__GET_USER_PERMISSIONS__WRITE__STEP_MOCK,
];
const CREATENEWVERSION__VALIDATEACTOR__NO_PERMISSION__STEP_MOCKS = [
    CREATENEWVERSION__VALIDATEACTOR__GET_USER_PERMISSIONS__NONE__STEP_MOCK,
];

// createnewversion
const CREATENEWVERSION__CREATENEWVERSION__CHECK_OUT__STEP_MOCK = utils.createMockStep(
    'Check out',
    'Check out',
    'CREATENEWVERSION',
    ['fetch-depth'],
    [],
);
const CREATENEWVERSION__CREATENEWVERSION__SETUP_GIT_FOR_OSBOTIFY__STEP_MOCK = utils.createMockStep(
    'Setup git for OSBotify',
    'Setup git for OSBotify',
    'CREATENEWVERSION',
    ['GPG_PASSPHRASE'],
    [],
);
const CREATENEWVERSION__CREATENEWVERSION__RUN_TURNSTYLE__STEP_MOCK = utils.createMockStep(
    'Run turnstyle',
    'Run turnstyle',
    'CREATENEWVERSION',
    ['poll-interval-seconds'],
    ['GITHUB_TOKEN'],
);
const CREATENEWVERSION__CREATENEWVERSION__CREATE_NEW_BRANCH__STEP_MOCK = utils.createMockStep(
    'Create new branch',
    'Create new branch',
    'CREATENEWVERSION',
    [],
    [],
    [],
    // eslint-disable-next-line no-template-curly-in-string
    {VERSION_BRANCH: 'version-${{ github.event.inputs.SEMVER_LEVEL }}-abcdef'},
);
const CREATENEWVERSION__CREATENEWVERSION__GENERATE_VERSION__STEP_MOCK = utils.createMockStep(
    'Generate version',
    'Generate version',
    'CREATENEWVERSION',
    ['GITHUB_TOKEN', 'SEMVER_LEVEL'],
    [],
);
const CREATENEWVERSION__CREATENEWVERSION__COMMIT_NEW_VERSION__STEP_MOCK = utils.createMockStep(
    'Commit new version',
    'Commit new version',
    'CREATENEWVERSION',
    [],
    [],
);
const CREATENEWVERSION__CREATENEWVERSION__UPDATE_MAIN_BRANCH__STEP_MOCK = utils.createMockStep(
    'Update main branch',
    'Update main branch',
    'CREATENEWVERSION',
    ['TARGET_BRANCH', 'SOURCE_BRANCH', 'OS_BOTIFY_TOKEN', 'GPG_PASSPHRASE'],
    [],
);
const CREATENEWVERSION__CREATENEWVERSION__ANNOUNCE_FAILED_WORKFLOW_IN_SLACK__STEP_MOCK = utils.createMockStep(
    'Announce failed workflow in Slack',
    'Announce failed workflow in Slack',
    'CREATENEWVERSION',
    ['SLACK_WEBHOOK'],
    [],
);
const CREATENEWVERSION__CREATENEWVERSION__STEP_MOCKS = [
    CREATENEWVERSION__CREATENEWVERSION__CHECK_OUT__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__SETUP_GIT_FOR_OSBOTIFY__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__RUN_TURNSTYLE__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__CREATE_NEW_BRANCH__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__GENERATE_VERSION__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__COMMIT_NEW_VERSION__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__UPDATE_MAIN_BRANCH__STEP_MOCK,
    CREATENEWVERSION__CREATENEWVERSION__ANNOUNCE_FAILED_WORKFLOW_IN_SLACK__STEP_MOCK,
];

module.exports = {
    CREATENEWVERSION__VALIDATEACTOR__ADMIN__STEP_MOCKS,
    CREATENEWVERSION__VALIDATEACTOR__WRITER__STEP_MOCKS,
    CREATENEWVERSION__VALIDATEACTOR__NO_PERMISSION__STEP_MOCKS,
    CREATENEWVERSION__CREATENEWVERSION__STEP_MOCKS,
};
