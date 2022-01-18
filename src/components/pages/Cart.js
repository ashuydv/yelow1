import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "Robin",
    price: 200,
  },
  {
    id: "b",
    name: "Dennis",
    price: 800,
  },
  {
    id: "d",
    name: "sdcsds",
    price: 100,
  },
];

// ** with useState ** //

// const Cart = () => {
//   const [list, setList] = React.useState(initialList);
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     const newList = list.concat({ name, id: uuidv4() });

//     setList(newList);

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <List list={list} />
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useReducer ** //

// const listReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return state.concat({ name: action.name, id: action.id });
//     default:
//       throw new Error();
//   }
// };

// const Cart = () => {
//   const [list, dispatchList] = React.useReducer(
//     listReducer,
//     initialList
//   );
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     dispatchList({ type: 'ADD_ITEM', name, id: uuidv4() });

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <List list={list} />
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useState and complex object ** //

// const Cart = () => {
//   const [listData, setListData] = React.useState({
//     list: initialList,
//     isShowList: true,
//   });
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     const newList = listData.list.concat({
//       name,
//       id: uuidv4(),
//     });

//     setListData({ ...listData, list: newList });

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       {listData.isShowList && <List list={listData.list} />}
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useReducer and complex object ** //

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: state.list.concat({
          name: action.name,
          price: action.price,
          id: action.id,
        }),
      };
    default:
      throw new Error();
  }
};

const Cart = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);

  const [pricetotal, setPricetotal] = React.useState(0)

  function handleChange(event) {
    setName(event.target.value);
    setPrice(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: "ADD_ITEM", name, price, id: uuidv4() });
    setName("");
    setPrice(0);
  }

  useEffect(() => {
    total();
  }, [initialList])

  const total = () => {
    let totalVal = 0;
    for(let i = 0; i < initialList.length; i++) {
      totalVal += initialList[i].price;
    }

    setPricetotal(totalVal);
  }

  return (
    <div>
      <div className="card" style={{boxShadow: "rgb(18 38 63 / 10%) 0px 0.75rem 1.5rem"}} >
        <div className="card-body">
          <h5 style={{borderBottom: "1px solid #eff2f7", paddingBottom: "12px"}} >Payment Details</h5>
          <List list={listData.list} />
          <AddItem
            name={name}
            price={price}
            onChange={handleChange}
            onAdd={handleAdd}
          />
          <div className="d-flex align-items-center justify-content-between py-3 px-2">
            <p style={{fontWeight: "bold"}} >Total</p>
            <p>{pricetotal} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddItem = ({ name, price, onChange, onAdd }) => (
  <div className="d-flex">
    <input
      type="text"
      className="form-control mr-1"
      value={name}
      onChange={onChange}
    />
    <button type="button" className="btn btn-primary" onClick={onAdd}>
      +
    </button>
  </div>
);

const List = ({ list }) => (
  <ul style={{listStyle: "none", padding: "0rem", paddingTop: "1rem"}} >
    {list.map((item) => (
      <li key={item.id}>
        <div className="d-flex align-items-center justify-content-between">
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default Cart;
