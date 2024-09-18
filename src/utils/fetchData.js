export const exerecisesOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '601ceb92famshd743a6717d16aa6p14da4cjsn00d2933ad71d',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}