import { useEffect, useState } from "react";
import ProductHeader from "../components/product-header";
import deleteProduct from "../service/deleteProduct";
import getAllProduct from "../service/getProduct";
import "../styles/list.css";

function ProductList() {
  const [selected, setSelected] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  const getIndex = (value) => {
    return selected.findIndex((each) => each === value);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const data = await getAllProduct();
    console.log("dat : ", data);
    setAllProduct(data);
    // setRegions(data);
  };
  function checkValue(e) {
    var value = e.target.value;
    var exist = false;
    selected.map((ele) => {
      if (ele.id === value) {
        exist = true;
      }
    });
    if (exist) {
      let targetIndex = getIndex(value);
      handleRemoveItem(targetIndex);
    } else {
      setSelected((prev) => [...selected, value]);
    }
  }

  const handleRemoveItem = (e) => {
    setSelected((products) => products.filter((_, index) => index !== 0));
  };

  const selectedItems = async () => {
    console.log("selected : ", selected);

    
    selected.forEach((ele) => {
      deleteSingleData(ele);
    });
    fetchAllData();
  };

  const deleteSingleData = async (id) => {
    // console.log("id: ",id)
    try {
      await deleteProduct(id);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="">
      <ProductHeader massDeleteClick={selectedItems} />
      <div className="body">
        <div className="row justify-content-center mt-3">
          <hr />
          {allProduct.map((ele) => (
            <div className="col-md-3 m-3 item">
              <input
                type="checkbox"
                id={ele.id}
                name={ele.name}
                key={ele.id}
                value={ele.id}
                onChange={checkValue}
              />
              <div className="text-center">
                <p>{ele.sku}</p>
                <p>{ele.name}</p>
                <p>{ele.price} $</p>
                {ele.type === "dvd" && <p>Size {ele.size} MB</p>}
                {ele.type === "furniture" && (
                  <p>
                    Dimention {ele.height}x{ele.width}x{ele.length}
                  </p>
                )}
                {ele.type === "book" && <p>Weight {ele.weight} KG</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
