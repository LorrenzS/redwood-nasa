import fetch from 'node-fetch'

export const getPOTD = async () => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=fM2nUwf3kG68KhRr8SVSXZgS4b9g3MmBHu5Dkeqv`
  )

  const json = await response.json()

  return json
}
