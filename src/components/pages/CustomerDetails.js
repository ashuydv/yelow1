import React from "react";

const CustomerDetails = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-start rounded px-0 p-2 shadow bg-white">
        <div
          style={{
            width: "100px",
            height: "100px",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iD6awG7ugwALMWGiwNVjjIPGu58gfRKhEg&usqp=CAU"
            className="img-fluid rounded-circle bg-dark mx-1"
            alt=""
          />
        </div>
        <div className="mx-3">
          <p className="mb-1" style={{ fontWeight: "bold" }}>
            Lord Voldemort
          </p>
          <p className="mb-1" style={{ width: "100%" }}>
            1234567890, lorem@gmail.com
          </p>
          <p className="mb-1">Since 2002</p>
          <p className="mb-1">Address</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
