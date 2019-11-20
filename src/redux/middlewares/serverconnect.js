const baseUrl = 'https://loft-taxi.glitch.me'

export const authorize = ({ login, password }) => {
  const url = `${baseUrl}/auth?username=${login}&password=${password}`

  return fetch(url).then(response => response.json())
}
