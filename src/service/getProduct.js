const getAllProduct = async (user) => {

    // let accessToken = localStorage.getItem('token');
  
      const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json"
      // "Authorization":`Bearer ${accessToken}`
      }
    };
  
    const res = await fetch("http://localhost:80/php-backend/read.php", requestOptions).then((response) =>
      response.json()
    );
  
    return res;
  };
  export default getAllProduct;