export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=e5RDtx3MZC6XFxwalCTPo5tzjxw5EH8r&q=${category}&limit=10`;
  console.log(url);
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
