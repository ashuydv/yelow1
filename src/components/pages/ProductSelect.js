import React from "react";
import Select from "react-select";

const options = [
  {
    value: "1",
    image: "https://dummyimage.com/70x25",
    title: "Nescafe",
  },
  {
    value: "2",
    image: "https://dummyimage.com/70x25",
    title: "Bru Gold",
  },
  {
    value: "3",
    image: "https://dummyimage.com/70x25",
    title: "Item 3",
  },
  {
    value: "4",
    image: "https://dummyimage.com/70x25",
    title: "Item 4",
  },
  {
    value: "5",
    image: "https://dummyimage.com/70x25",
    title: "Item 5",
  },
];

const ProductSelect = () => {
  return (
    <div>
      <Select
        isSearchable={false}
        options={options}
        formatOptionLabel={(option) => (
          <div className="d-flex align-items-center">
            <img
              src={option.image}
              alt="country-image"
              className="img-fluid mr-2"
            />
            <span>{option.title}</span>
          </div>
        )}
      />
    </div>
  );
};

export default ProductSelect;
