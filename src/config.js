export const config = {
  API_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://devs101-eventapp.herokuapp.com/'
      : 'http://localhost:3200'
}
