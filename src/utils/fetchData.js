export const exerecisesOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4aab1bc8camsh2ff4f5ff13be371p183bbajsn2c969b7016d8',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}