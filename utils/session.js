const session = {
	set (key, value) {
    sessionStorage.setItem(key.toString(), JSON.stringify(value))
  },
  get (key) {
    return JSON.parse(sessionStorage.getItem(key.toString()))
  },
  remove (key) {
    sessionStorage.removeItem(key.toString())
  },
  clear () {
    sessionStorage.clear()
  }
}

export default session
