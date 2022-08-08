import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductAddHeader from "../components/product-add-header";
import "../styles/add.css";
import { InputLabel } from "@material-ui/core";
import AddProductApi from "../service/submitForm";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AddProduct() {
  const [typeSwicher, setTypeSwitcher] = useState("dvd");
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="dvd">DVD</option>
        <option value="furniture">Furniture</option>
        <option value="book">Book</option>
      </select>
    </>
  ));

  const swichChanger = (ele) => {
    // console.log("ele : ", ele);

    if (ele) {
      setTypeSwitcher(ele);
    }
    console.log("ele : ", typeSwicher);
  };

  const onSubmit = (data) => {
    console.log("data : ", data);
    addProductToDatabase(data);
    // registerProduct(data);
  };

  const addProductToDatabase = async (data) => {
    setShow(true);
    const res = await AddProductApi(data);
    console.log("dat : ", res);
  };

  return (
    <div>
      <ProductAddHeader />
      {/* <h1>product list</h1> */}
      {/* <div className="body">
        <Alert show={show} variant="success">
          <Alert.Heading>Success fully added</Alert.Heading>
        </Alert>
        <div className="row justify-content-center mt-3">
          <hr />
        </div>
      </div> */}
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="row">
            <div className="col-md-3">
              <InputLabel id="sku">SKU</InputLabel>
            </div>
            <div className="col-md-3">
              <input
                name="sku"
                type="text"
                className="form-control"
                placeholder="sku"
                {...register("sku")}
                required
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <InputLabel id="name">Name</InputLabel>
            </div>
            <div className="col-md-3">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="name"
                {...register("name")}
                required
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <InputLabel id="price">Price</InputLabel>
            </div>
            <div className="col-md-3">
              <input
                name="price"
                type="number"
                className="form-control"
                placeholder="price in number"
                {...register("price")}
                required
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <InputLabel id="type">Type Switcher</InputLabel>
          </div>
          <div className="col-md-3">
            <Select
              {...register("type")}
              onChange={(er) => swichChanger(er.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          {typeSwicher === "dvd" && (
            <div className="row m-3">
              <div className="col-md-3">
                <InputLabel id="price">Size in MB</InputLabel>
              </div>
              <div className="col-md-3">
                <input
                  name="size"
                  className="form-control"
                  type="number"
                  {...register("size")}
                  required
                />
              </div>
            </div>
          )}
          {typeSwicher === "furniture" && (
            <div>
              <div className="row m-3">
                <div className="col-md-3">
                  <InputLabel id="price">Height in CM</InputLabel>
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="height"
                    type="number"
                    {...register("height")}
                    required
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="col-md-3">
                  <InputLabel id="price">Width in CM</InputLabel>
                </div>
                <div className="col-md-3">
                  <input
                    name="width"
                    className="form-control"
                    type="number"
                    {...register("width")}
                    required
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="col-md-3">
                  <InputLabel id="price">Length in CM</InputLabel>
                </div>
                <div className="col-md-3">
                  <input
                    name="length"
                    className="form-control"
                    type="number"
                    {...register("length")}
                    required
                  />
                </div>
              </div>
            </div>
          )}
          {typeSwicher === "book" && (
            <div>
              <div className="row m-3">
                <div className="col-md-3">
                  <InputLabel id="price">Weight in KG</InputLabel>
                </div>
                <div className="col-md-3">
                  <input
                    name="length"
                    type="number"
                    className="form-control"
                    {...register("weight")}
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-5 text-center">
          <input className="btn btn-success" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
