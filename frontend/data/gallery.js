const gallery = Array(19)
  .fill(undefined)
  .map((item, i) => ({
    id: i + 1,
    image: `/gallery/image${i + 1}.jpg`,
  }));

export default gallery;
