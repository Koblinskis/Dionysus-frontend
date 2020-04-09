function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

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