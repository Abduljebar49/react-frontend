const AddProductApi = async (data) => {
  // let accessToken = localStorage.getItem('token');

  var formData = new FormData();

  for (const key in data) {
    formData.append(`${key}`, `${data[key]}`);
  }
  const requestOptions = {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   // Authorization: `Bearer ${accessToken}`,
    // },
    body: formData,
  };

  const res = await fetch(
    "http://localhost:80/php-backend/create.php",
    requestOptions
  ).then((response) => response.json());

  return res;
};

export default AddProductApi;
