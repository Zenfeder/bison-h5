import Vue from 'vue'

Vue.filter('formatDate', timestamp => {
  const date_from = new Date(timestamp - 0)
  const date_now = new Date()

  let year_diff = date_now.getFullYear() - date_from.getFullYear(),
      month_diff = date_now.getMonth() - date_from.getMonth(),
      day_diff = date_now.getDate() - date_from.getDate(),
      hour_diff = date_now.getHours() - date_from.getHours(),
      minute_diff = date_now.getMinutes() - date_from.getMinutes(),
      second_diff = date_now.getSeconds() - date_from.getSeconds()

  if (year_diff > 0) {
    return year_diff + '年前'
  }
  if (month_diff > 0) {
    return month_diff + '个月前'
  }
  if (day_diff > 0) {
    return day_diff + '天前'
  }
  if (hour_diff > 0) {
    return hour_diff + '小时前'
  }
  if (minute_diff > 0) {
    return minute_diff + '分钟前'
  }
  if (second_diff > 0) {
    return '刚刚'
  }
})