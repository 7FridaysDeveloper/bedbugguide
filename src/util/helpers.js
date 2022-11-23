const formData = (data) => {
  const form = new FormData();
  for (const key in data) {
    form.append(key, data[key]);
  }
  return data;
};

export { formData }
