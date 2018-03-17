let PREFIX = process.env.apiBasePath

export default {
    apiUser: ({ userId }) => `${PREFIX}/api/user/${userId}`
}
