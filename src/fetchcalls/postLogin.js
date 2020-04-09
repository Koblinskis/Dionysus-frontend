export default async function postLogin(data) {
  try {
    const res = await fetch(process.env.REACT_APP_NODE_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const resObj = await res.json()
    return resObj.token
  } catch (e) {
    console.error('Error:', e)
    alert('Invaild User')
  }
}