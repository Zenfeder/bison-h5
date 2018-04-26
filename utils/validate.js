// 邮箱格式验证
function validateEmail (email) {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(String(email).toLowerCase())
}

// 用户名格式验证
// 3-12位，字母或下划线开头，只能包含字母、数字、下划线
function validateUsername (username) {
  let reg = /^([a-zA-Z]|_)\w{2,11}$/
  return reg.test(username)
}

// 密码格式验证
// 6-12位，不含空白字符，包括空格、制表符、换页符和换行符
function validatePassword (password) {
  let reg = /^[^\s]{6,12}$/
  return reg.test(password)
}

export default  {
  validateEmail,
  validateUsername,
  validatePassword
}
