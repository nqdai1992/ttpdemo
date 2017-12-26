
const setCookies = (cookies, exp = 3) => {
  const d = new Date()
  d.setTime(d.getTime() + (exp * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()

  Object.entries(cookies).forEach(cookie => {
    document.cookie = [cookie.join('='), expires, ';path=/'].join(';')
  })
}

const getCookie = (cname) => {
  const cookies = document.cookie.split(';')

  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=')
    if (key === cname) return value
  }

  return ''
}

export default {
  setCookies,
  getCookie
}