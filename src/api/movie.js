export const getMoviesApi = async (movie, movieYear) => {
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=75ac7c47&s=${movie?.trim() || 'Hulk'}&y=${movieYear || ''}`)

  const data = await response.json()

  return data
}