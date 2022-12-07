const formData = (data) => {
  const form = new FormData();
  for (const key in data) {
    form.append(key, data[key]);
  }
  return data;
};

export { formData }


export function youtubeParser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}


export const formatToday = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const today  = new Date();
  return (today.toLocaleDateString("en-US", options));
}