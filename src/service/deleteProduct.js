const deleteProduct = async (data) => {
  var formData = new FormData();

  formData.append(`id`, data);

  const requestOptions = {
    method: "POST",
    body: formData,
  };

  const res = await fetch(
    "http://localhost:80/php-backend/delete.php",
    requestOptions
  ).then((response) => response.json());

  return res;
};
export default deleteProduct;
