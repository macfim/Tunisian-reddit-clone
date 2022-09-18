const checkImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

const checkYoutubeVideo = (url) => {
  return /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(
    url
  );
};

const checkUrlContentType = (url) => {
  if (checkImage(url)) return "image";
  else if (checkYoutubeVideo(url)) return "video";
  else return null;
};

export { checkUrlContentType };