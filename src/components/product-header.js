import { Link } from "react-router-dom";
import "../styles/add.css";

function ProductHeader(props) {
  const onMassClicked = (event) => {
    props.massDeleteClick(event);
  };
  return (
    <div>
      <div className="row mt-5">
        <span className="pro-text" style={{ width: "fit-content" }}>
          Product List
        </span>
        <span className="btns" style={{ width: "fit-content" }}>
          <Link className="btn btn-success m-1 btn-con" to="/addproduct">
            Add
          </Link>
          <button
            className="btn btn-warning m-1 btn-con"
            onClick={onMassClicked}
          >
            Mass Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default ProductHeader;
