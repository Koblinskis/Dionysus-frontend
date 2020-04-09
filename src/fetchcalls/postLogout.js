import readCookie from '../utils/readCookie'

export default async function postLogout() {
  try {
    const res = await fetch(process.env.REACT_APP_NODE_URL + 'logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + readCookie('token'),
      }
    })
    return res
  } catch (e) {
    console.error('Error:', e)
    alert(e)
  }
}