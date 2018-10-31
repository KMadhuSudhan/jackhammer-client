//AUTH
export const SIGNUP = "SIGNUP"
export const LOGIN = "LOGIN"
export const AUTH_USER = "AUTH_USER"
export const UNAUTH_USER = "UNAUTH_USER"
export const AUTH_ERROR = "AUTH_ERROR"
export const LOGOUT = "LOGOUT"

//RESET PASSWORD
export const RESET_PASSWORD_INSTRUCTIONS = "RESET_PASSWORD_INSTRUCTIONS"
export const RESET_PASSWORD_INSTRUCTIONS_FULFILLED = "RESET_PASSWORD_INSTRUCTIONS_FULFILLED"
export const VERIFY_RESET_PASSWORD_TOKEN = "VERIFY_RESET_PASSWORD_TOKEN"
export const VERIFY_RESET_PASSWORD_TOKEN_FULFILLED = "VERIFY_RESET_PASSWORD_TOKEN_FULFILLED"
export const RESET_PASSWORD = "RESET_PASSWORD"
export const RESET_PASSWORD_FULFILLED = "RESET_PASSWORD_FULFILLED"
export const VERIFY_PASSWORD_TOEKN_ERROR = "VERIFY_PASSWORD_TOEKN_ERROR"
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR"

//scans
export const FETCH_ALL_SCANS = 'FETCH_ALL_SCANS'
export const FETCH_ALL_SCANS_FULFILLED = 'FETCH_ALL_SCANS_FULFILLED'

export const CREATE_SCAN = 'CREATE_SCAN'
export const CREATE_SCAN_FULFILLED = 'CREATE_SCAN_FULFILLED'

export const FETCH_SCAN = 'FETCH_SCAN'
export const FETCH_SCAN_FULFILLED = 'FETCH_SCAN_FULFILLED'

export const UPDATE_SCAN = 'UPDATE_SCAN'
export const UPDATE_SCAN_FULFILLED = 'UPDATE_SCAN_FULFILLED'

export const DELETE_SCAN = 'DELETE_SCAN'
export const DELETE_SCAN_FULFILLED = 'DELETE_SCAN_FULFILLED'

export const SCAN_OPERATION_REJECTED = 'SCAN_OPERATION_REJECTED'
export const FETCH_ALL_STATIC_SCAN_TYPES_FULFILLED = 'FETCH_ALL_STATIC_SCAN_TYPES_FULFILLED'
export const FETCH_ALL_MOBILE_SCAN_TYPES_FULFILLED = 'FETCH_ALL_MOBILE_SCAN_TYPES_FULFILLED'
export const FETCH_ALL_WEB_SCAN_TYPES_FULFILLED = 'FETCH_ALL_WEB_SCAN_TYPES_FULFILLED'
export const FETCH_ALL_WPSCAN_SCAN_TYPES_FULFILLED = 'FETCH_ALL_WPSCAN_SCAN_TYPES_FULFILLED'
export const FETCH_ALL_NETWORK_SCAN_TYPES_FULFILLED = 'FETCH_ALL_NETWORK_SCAN_TYPES_FULFILLED'

//REPOS
export const FETCH_ALL_REPOS = 'FETCH_ALL_REPOS'
export const FETCH_ALL_REPOS_FULFILLED = 'FETCH_ALL_REPOS_FULFILLED'

export const FETCH_GROUP_REPOS = 'FETCH_GROUP_REPOS'
export const FETCH_GROUP_REPOS_FULFILLED = 'FETCH_GROUP_REPOS_FULFILLED'
export const REPO_OPERATION_REJECTED = 'REPO_OPERATION_REJECTED'

//Schedule Types
export const FETCH_ALL_SCHEDULE_TYPES = 'FETCH_ALL_SCHEDULE_TYPES'
export const FETCH_SCHEDULE_TYPES_FULFILLED = 'FETCH_SCHEDULE_TYPE_FULFILLED'
export const SCHEDULE_TYPE_OPERATION_REJECTED = 'SCHEDULE_TYPE_OPERATION_REJECTED'

//users
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS'
export const FETCH_ALL_USERS_FULFILLED = 'FETCH_ALL_USERS_FULFILLED'

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED'

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED'

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_PASSWORD_FULFILLED = 'UPDATE_PASSWORD_FULFILLED'

export const USER_OPERATION_REJECTED = 'USER_OPERATION_REJECTED'

//groups
export const FETCH_ALL_GROUPS = 'FETCH_ALL_GROUPS'
export const FETCH_ALL_GROUPS_FULFILLED = 'FETCH_ALL_GROUPS_FULFILLED'

export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_GROUP_FULFILLED = 'CREATE_GROUP_FULFILLED'

export const FETCH_GROUP = 'FETCH_GROUP'
export const FETCH_GROUP_FULFILLED = 'FETCH_GROUP_FULFILLED'

export const UPDATE_GROUP = 'UPDATE_GROUP'
export const UPDATE_GROUP_FULFILLED = 'UPDATE_GROUP_FULFILLED'

export const DELETE_GROUP = 'DELETE_GROUP'
export const DELETE_GROUP_FULFILLED = 'DELETE_GROUP_FULFILLED'

export const GROUP_OPERATION_REJECTED = 'GROUP_OPERATION_REJECTED'

//ROLES
export const FETCH_ALL_ROLES = 'FETCH_ALL_ROLES'
export const FETCH_ALL_ROLES_FULFILLED = 'FETCH_ROLES_FULFILLED'

export const CREATE_ROLE = 'CREATE_ROLE'
export const CREATE_ROLE_FULFILLED = 'CREATE_ROLE_FULFILLED'

export const FETCH_ROLE = 'FETCH_ROLE'
export const FETCH_ROLE_FULFILLED = 'FETCH_ROLE_FULFILLED'

export const UPDATE_ROLE = 'UPDATE_ROLE'
export const UPDATE_ROLE_FULFILLED = 'UPDATE_ROLE_FULFILLED'

export const DELETE_ROLE = 'DELETE_ROLE'
export const DELETE_ROLE_FULFILLED = 'DELETE_ROLE_FULFILLED'

export const ROLE_OPERATION_REJECTED = 'ROLE_OPERATION_REJECTED'

//PERMISSIONS
export const FETCH_ALL_PERMISSIONS = 'FETCH_PERMISSIONS'
export const FETCH_ALL_PERMISSIONS_FULFILLED = 'FETCH_PERMISSIONS_FULFILLED'

export const CREATE_PERMISSION = 'CREATE_PERMISSION'
export const CREATE_PERMISSION_FULFILLED = 'CREATE_PERMISSION_FULFILLED'

export const FETCH_PERMISSION = 'FETCH_PERMISSION'
export const FETCH_PERMISSION_FULFILLED = 'FETCH_PERMISSION_FULFILLED'

export const UPDATE_PERMISSION = 'UPDATE_PERMISSION'
export const UPDATE_PERMISSION_FULFILLED = 'UPDATE_PERMISSION_FULFILLED'

export const DELETE_PERMISSION = 'DELETE_PERMISSION'
export const DELETE_PERMISSION_FULFILLED = 'DELETE_PERMISSION_FULFILLED'

export const PERMISSION_OPERATION_REJECTED = 'PERMISSION_OPERATION_REJECTED'

//Findings

export const FETCH_ALL_FINDINGS = 'FETCH_ALL_FINDINGS'
export const FETCH_ALL_FINDINGS_FULFILLED = 'FETCH_ALL_FINDINGS_FULFILLED'

export const FETCH_FINDING = 'FETCH_FINDING'
export const FETCH_FINDING_FULFILLED = 'FETCH_FINDING_FULFILLED'

export const UPDATE_FINDING = 'UPDATE_FINDING'
export const UPDATE_FINDING_FULFILLED = 'UPDATE_FINDING_FULFILLED'

export const DELETE_FINDING = 'DELETE_FINDING'
export const DELETE_FINDING_FULFILLED = 'DELETE_FINDING_FULFILLED'

export const FINDING_OPERATION_REJECTED = 'FINDING_OPERATION_REJECTED'

//Commnets

export const FETCH_ALL_COMMENTS = 'FETCH_ALL_FINDING_COMMENTS'
export const FETCH_ALL_COMMENTS_FULFILLED = 'FETCH_ALL_FINDING_COMMENTS_FULFILLED'

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CREATE_COMMENT_FULFILLED = 'CREATE_COMMENT_FULFILLED'

export const COMMENT_OPERATION_REJECTED = 'COMMENT_OPERATION_REJECTED'

//uploads
export const FETCH_ALL_FINDING_UPLOADS = 'FETCH_ALL_FINDING_UPLOADS'
export const FETCH_ALL_FINDING_UPLOADS_FULFILLED = 'FETCH_ALL_FINDING_UPLOADS_FULFILLED'
export const FETCH_UPLOADED_FILE = 'FETCH_UPLOADED_FILE'
export const FETCH_UPLOADED_FILE_FULFILLED = 'FETCH_UPLOADED_FILE_FULFILLED'
export const UPLOAD_FILE = 'UPLOAD_FILE'
export const UPLOAD_FILE_FULFILLED = 'UPLOAD_FILE_FULFILLED'
export const UPLOAD_OPERATION_REJECTED = 'UPLOAD_OPERATION_REJECTED'

//tags
export const FETCH_ALL_FINDING_TAGS = 'FETCH_ALL_FINDING_TAGS'
export const FETCH_ALL_FINDING_TAGS_FULFILLED = 'FETCH_ALL_FINDING_TAGS_FULFILLED'
export const ADD_TAG = 'ADD_TAG'
export const ADD_TAG_FULFILLED = 'ADD_TAG_FULFILLED'
export const TAG_OPERATION_REJECTED = 'TAG_OPERATION_REJECTED'

//Tools
export const FETCH_ALL_TOOLS = 'FETCH_ALL_TOOLS'
export const FETCH_ALL_TOOLS_FULFILLED = 'FETCH_ALL_TOOLS_FULFILLED'
export const CREATE_TOOL = 'CREATE_TOOL'
export const CREATE_TOOL_FULFILLED = 'CREATE_TOOL_FULFILLED'
export const FETCH_TOOL = 'FETCH_TOOL'
export const FETCH_TOOL_FULFILLED = 'FETCH_TOOL_FULFILLED'
export const UPDATE_TOOL = 'UPDATE_TOOL'
export const UPDATE_TOOL_FULFILLED = 'UPDATE_TOOL_FULFILLED'
export const DELETE_TOOL = 'DELETE_TOOL'
export const DELETE_TOOL_FULFILLED = 'DELETE_TOOL_FULFILLED'
export const TOOL_OPERATION_REJECTED = 'TOOL_OPERATION_REJECTED'

//Languages
export const FETCH_ALL_LANGUAGES = 'FETCH_ALL_TOOLS'
export const FETCH_ALL_LANGUAGES_FULFILLED = 'FETCH_ALL_TOOLS_FULFILLED'
export const CREATE_LANGUAGE = 'CREATE_TOOL'
export const CREATE_LANGUAGE_FULFILLED = 'CREATE_TOOL_FULFILLED'
export const FETCH_LANGUAGE = 'FETCH_TOOL'
export const FETCH_LANGUAGE_FULFILLED = 'FETCH_TOOL_FULFILLED'
export const UPDATE_LANGUAGE = 'UPDATE_TOOL'
export const UPDATE_LANGUAGE_FULFILLED = 'UPDATE_TOOL_FULFILLED'
export const DELETE_LANGUAGE = 'DELETE_TOOL'
export const DELETE_LANGUAGE_FULFILLED = 'DELETE_TOOL_FULFILLED'
export const LANGUAGE_OPERATION_REJECTED = 'TOOL_OPERATION_REJECTED'

//SCANS
export const FETCH_ALL_SCAN_TYPES = 'FETCH_ALL_SCAN_TYPES'
export const FETCH_ALL_SCAN_TYPES_FULFILLED = 'FETCH_ALL_SCAN_TYPES_FULFILLED'
export const CREATE_SCAN_TYPE = 'CREATE_SCAN_TYPE'
export const CREATE_SCAN_TYPE_FULFILLED = 'CREATE_SCAN_TYPE_FULFILLED'
export const FETCH_SCAN_TYPE = 'FETCH_SCAN_TYPE'
export const FETCH_SCAN_TYPE_FULFILLED = 'FETCH_SCAN_TYPE_FULFILLED'
export const UPDATE_SCAN_TYPE = 'UPDATE_SCAN_TYPE'
export const UPDATE_SCAN_TYPE_FULFILLED = 'UPDATE_SCAN_TYPE_FULFILLED'
export const DELETE_SCAN_TYPE = 'DELETE_SCAN_TYPE'
export const DELETE_SCAN_TYPE_FULFILLED = 'DELETE_SCAN_TYPE_FULFILLED'
export const SCAN_TYPE_OPERATION_REJECTED = 'SCAN_TYPE_OPERATION_REJECTED'

//Filters
export const FETCH_FILTER_VALUES = 'FETCH_FILTER_VALUES'
export const FETCH_FILTER_VALUES_FULFILLED = 'FETCH_FILTER_VALUES_FULFILLED'
export const FETCH_FILTER_RESULTS = 'FETCH_FILTER_RESULTS'
export const FETCH_FILTER_RESULTS_FULFILLED = 'FETCH_FILTER_RESULTS_FULFILLED'
export const FILTER_OPERATION_REJECTED = 'FILTER_OPERATION_REJECTED'

//actions
export const FETCH_ALL_NAVIGATION_ACTIONS = 'FETCH_ALL_NAVIGATION_ACTIONS'
export const FETCH_ALL_NAVIGATION_ACTIONS_FULFILLED = 'FETCH_ALL_NAVIGATION_ACTIONS_FULFILLED'
export const FETCH_ALL_NAVIGATION_ACTIONS_REJECTED = 'FETCH_ALL_NAVIGATION_ACTIONS_REJECTED'

//tasks
export const FETCH_ALL_TASKS = 'FETCH_ALL_TASKS'
export const FETCH_ALL_TASKS_FULFILLED = 'FETCH_ALL_TASKS_FULFILLED'
export const FETCH_ALL_TASKS_REJECTED = 'FETCH_ALL_TASKS_REJECTED'

//git configurations
export const FETCH_GIT_DETAILS = 'FETCH_GIT_DETAILS'
export const FETCH_GIT_DETAILS_FULFILLED = 'FETCH_GIT_DETAILS_FULFILLED'

export const CREATE_GIT_DETAILS = 'CREATE_GIT_DETAILS'
export const CREATE_GIT_DETAILS_FULFILLED = 'CREATE_GIT_DETAILS_FULFILLED'

export const UPDATE_GIT_DETAILS = 'UPDATE_GIT_DETAILS'
export const UPDATE_GIT_DETAILS_FULFILLED = 'UPDATE_GIT_DETAILS_FULFILLED'
export const UPDATE_GIT_DETAILS_REJECTED = 'UPDATE_GIT_DETAILS_REJECTED'
export const GIT_OPERATION_REJECTED = 'GIT_OPERATION_REJECTED'

//smtp configurations
export const FETCH_SMTP_DETAILS = 'FETCH_SMTP_DETAILS'
export const FETCH_SMTP_DETAILS_FULFILLED = 'FETCH_SMTP_DETAILS_FULFILLED'
export const CREATE_SMTP_DETAILS = 'CREATE_SMTP_DETAILS'
export const CREATE_SMTP_DETAILS_FULFILLED = 'CREATE_SMTP_DETAILS_FULFILLED'
export const UPDATE_SMTP_DETAILS = 'UPDATE_SMTP_DETAILS'
export const UPDATE_SMTP_DETAILS_FULFILLED = 'UPDATE_SMTP_DETAILS_FULFILLED'
export const SMTP_OPERATION_REJECTED = 'SMTP_OPERATION_REJECTED'

//jira configurations
export const FETCH_JIRA_DETAILS = 'FETCH_JIRA_DETAILS'
export const FETCH_JIRA_DETAILS_FULFILLED = 'FETCH_JIRA_DETAILS_FULFILLED'
export const CREATE_JIRA_DETAILS = 'CREATE_JIRA_DETAILS'
export const CREATE_JIRA_DETAILS_FULFILLED = 'CREATE_JIRA_DETAILS_FULFILLED'
export const UPDATE_JIRA_DETAILS = 'UPDATE_JIRA_DETAILS'
export const UPDATE_JIRA_DETAILS_FULFILLED = 'UPDATE_JIRA_DETAILS_FULFILLED'
export const JIRA_OPERATION_REJECTED = 'JIRA_OPERATION_REJECTED'

//default role configurations
export const FETCH_DEFAULT_ROLE = 'FETCH_DEFAULT_ROLE'
export const FETCH_DEFAULT_ROLE_FULFILLED = 'FETCH_DEFAULT_ROLE_FULFILLED'
export const CREATE_DEFAULT_ROLE = 'CREATE_DEFAULT_ROLE'
export const CREATE_DEFAULT_ROLE_FULFILLED = 'CREATE_DEFAULT_ROLE_FULFILLED'
export const UPDATE_DEFAULT_ROLE = 'UPDATE_DEFAULT_ROLE'
export const UPDATE_DEFAULT_ROLE_FULFILLED = 'UPDATE_DEFAULT_ROLE_FULFILLED'
export const DEFAULT_ROLE_OPERATION_REJECTED = 'DEFAULT_ROLE_OPERATION_REJECTED'

//severity levels configurations
export const FETCH_SEVERITY_LEVELS = 'FETCH_SEVERITY_LEVELS'
export const FETCH_SEVERITY_LEVELS_FULFILLED = 'FETCH_SEVERITY_LEVELS_FULFILLED'
export const UPDATE_SEVERITY_LEVELS = 'UPDATE_SEVERITY_LEVELS'
export const UPDATE_SEVERITY_LEVELS_FULFILLED = 'UPDATE_SEVERITY_LEVELS_FULFILLED'
export const SEVERITY_LEVELS_OPERATION_REJECTED = 'SEVERITY_LEVELS_OPERATION_REJECTED'

//hard code secret
export const FETCH_HARDCODE_SECRET = 'FETCH_HARDCODE_SECRET'
export const FETCH_HARDCODE_SECRET_FULFILLED = 'FETCH_HARDCODE_SECRET_FULFILLED'
export const CREATE_HARDCODE_SECRET = 'CREATE_HARDCODE_SECRET'
export const CREATE_HARDCODE_SECRET_FULFILLED = 'CREATE_HARDCODE_SECRET_FULFILLED'
export const UPDATE_HARDCODE_SECRET = 'UPDATE_HARDCODE_SECRET'
export const UPDATE_HARDCODE_SECRET_FULFILLED = 'UPDATE_HARDCODE_SECRET_FULFILLED'
export const HARDCODE_SECRET_OPERATION_REJECTED = 'HARDCODE_SECRET_OPERATION_REJECTED'

//dashboard
export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA'
export const FETCH_DASHBOARD_DATA_FULFILLED = 'FETCH_DASHBOARD_DATA_FULFILLED'
export const DASHBOARD_DATA_OPERATION_REJECTED = 'DASHBOARD_DATA_OPERATION_REJECTED'

//analytics
export const FETCH_ANALYTICS_DATA = 'FETCH_ANALYTICS_DATA'
export const FETCH_ANALYTICS_DATA_FULFILLED = 'FETCH_ANALYTICS_DATA_FULFILLED'
export const ANALYTICS_DATA_OPERATION_REJECTED = 'ANALYTICS_DATA_OPERATION_REJECTED'

//applications
export const FETCH_APPLICATIONS_DATA = 'FETCH_APPLICATIONS_DATA'
export const FETCH_APPLICATIONS_DATA_FULFILLED = 'FETCH_APPLICATIONS_DATA_FULFILLED'
export const APPLICATIONS_DATA_OPERATION_REJECTED = 'APPLICATIONS_DATA_OPERATION_REJECTED'