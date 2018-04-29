// 取窗口滚动条高度
function getScrollTop() {
  let scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  }
  else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}


// 取窗口可视范围的高度
function getClientHeight() {
  return document.body.clientHeight
}

// 取文档内容实际高度
function getScrollHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}

export {
  getScrollTop,
  getClientHeight,
  getScrollHeight,
}