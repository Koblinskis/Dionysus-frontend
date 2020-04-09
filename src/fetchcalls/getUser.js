import readCookie from '../utils/readCookie'

export default async function getUser() {
  try {
    const res = await fetch(process.env.REACT_APP_NODE_URL + 'profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + readCookie('token'),
      }
    })
    return res.body
  } catch (e) {
    console.error('Error:', e)
    return null
  }
}