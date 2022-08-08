import { Link } from "react-router-dom";

function ProductAddHeader() {
  return (
    <div>
      <div className="row mt-5">
        <span className="pro-text" style={{width:'fit-content'}}>Product Add</span>
        <span className="btns" style={{width:'fit-content'}}>
          {/* <button className="btn btn-success m-1 btn-con">Save</button> */}
          <Link className="btn btn-warning m-1 btn-con" to="/">
            Cancel
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ProductAddHeader;
