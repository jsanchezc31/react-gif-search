export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=WqBFX8y3jtPaf5j8AZAAQKdmeqLxiE9H&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  // console.log(data);
  // console.log(gifs);
  return gifs;
};
