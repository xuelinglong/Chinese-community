export const setCookie = (name, value, seconds) => {
  seconds = seconds || 0
  let expires = ''
  if (seconds !== 0) {
    let exp = new Date()
    exp.setTime(exp.getTime() + (seconds * 1000))
    expires = ';expires=' + exp.toGMTString()
  }
  document.cookie = name + '=' + escape(value) + expires
}

export const getCookie = (name) => {
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr === document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return null
  }
}

export const delCookie = (name) => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval !== null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
