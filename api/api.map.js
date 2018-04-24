let PREFIX = process.env.apiBasePath

export default {
  // 用户
  user: () => `${PREFIX}/api/user`,
  userRegisterVcode: () => `${PREFIX}/api/user/register_vcode`,
  userRegister: () => `${PREFIX}/api/user/register`,
  userlogin: () => `${PREFIX}/api/user/login`,
  userPwdUpdate: () => `${PREFIX}/api/user/pwd_update`,
  userPwdEmail: () => `${PREFIX}/api/user/pwd_email`,
  userPwdReset: () => `${PREFIX}/api/user/pwd_reset`,
  userJokes: () => `${PREFIX}/api/user/jokes`,

  // 段子与评论
  joke: () => `${PREFIX}/api/joke`,
  jokeById: ({ jokeId }) => `${PREFIX}/api/joke/${jokeId}`,
  jokeComment: ({ jokeId }) => `${PREFIX}/api/joke/${jokeId}/comment`,
  jokeCommentDelete: ({ jokeId, commentId }) => `${PREFIX}/api/joke/${jokeId}/comment/${commentId}`,

  // 搜索
  search: () => `${PREFIX}/api/search`,
  searchHot: () => `${PREFIX}/api/search/hot`
}
