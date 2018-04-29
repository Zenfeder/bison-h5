const storage = {
	set (key, value, ms) {
    // 默认缓存7天
    const _ms = ms ? ms : 7*24*60*60*1000

    const data = {
      value: value, 
      expires_at: new Date().getTime() + _ms / 1
    }

    localStorage.setItem(key.toString(), JSON.stringify(data))
  },
  get (key) {
    let data = JSON.parse(localStorage.getItem(key.toString()))
    if (data !== null) {
      if (data.expires_at !== null && data.expires_at < new Date().getTime()) {
        localStorage.removeItem(key.toString())
      } else {
        return data.value
      }
    }
    return null
  },
  remove (key) {
    localStorage.removeItem(key.toString())
  },
  clear () {
    localStorage.clear()
  }
}

export default storage
