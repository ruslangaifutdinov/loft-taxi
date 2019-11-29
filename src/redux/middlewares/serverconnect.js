const serverUrl = 'https://loft-taxi.glitch.me'

export const authorize = ({ login, password }) => {
  const url = `${serverUrl}/auth?username=${login}&password=${password}`

  return fetch(url).then(response => response.json())
}

export const getAddressList = () => {
  const url = `${serverUrl}/addressList`;

  return fetch(url).then(response => response.json());
};

export const getRoute = (from, to) => {
  const url = `${serverUrl}/route?address1=${from}&address2=${to}`;

  return fetch(url).then(response => response.json());
};


export const regUser = action => {
  return fetch('https://loft-taxi.glitch.me/register',{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(action.payload)
  }).then(response => response.json())
}