import { useState } from "react";

const Content = () => {
  // let num = 0 ;
  const [num, setNum] = useState(0);

  const [data, setData] = useState([
    { id: 1, ItemName: "Pasta", Price: "1500rs" },
    { id: 2, ItemName: "Noodles", Price: "500rs" },
    { id: 3, ItemName: "Chicken Koththu", Price: "1200rs" },
  ]);

  const increment = () => {
    // let incre = num;

    setNum(num + 1);
    // console.log(incre)
  };

  return (
    <div className="main-table">
      {/* {this.data.map((item, index) => {
        
      })} */}
      <table className="table">
        <caption className="caption">Kreation Food Menu</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Las</td>
            <td>2$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Content;
