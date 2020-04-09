export default async function postUser(data) {
  try {
    const res = await fetch(process.env.REACT_APP_NODE_URL + 'registration', {
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
  }
}