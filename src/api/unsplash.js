import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c006e7c7d5a25b5ba885fef240a7e98237a59d4fdb9a322e8dabb074670b4e39'
  }
})