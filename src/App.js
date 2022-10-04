import React, { useState } from 'react';
import './App.css';
/* return o render
  map() => (
    { elem.hide || (
      <div>
      </div>
      )
  }
) */

function App() {
  const [list, setList] = useState([]);

  const addRandomNumber = () => {
    const listB = [...list];
    listB.push({ roll: Math.round(Math.random() * 5 + 1), hide: false, num: 0 });
    setList(listB);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The die and its roll history
        </p>
        <button
          onClick={addRandomNumber}
          tabIndex={0}
          type="button"
        >
          Roll die
        </button>
      </header>
      <TableRoll
        list={list}
        setList={setList}
      />
    </div>
  );
}

function TableRoll(props) {
  const { list, setList } = props;
  let num = 0;
  const deleteNumber = (index) => {
    const listB = [...list];
    listB.splice(index, 1);
    setList(listB);
  };
  const hideItem = (index) => {
    const listB = [...list];
    listB[index].hide = true;
    setList(listB);
  };
  const listWithId = list.map((item, index) => {
    const newNum = (!item.hide) ? num += 1 : 0;
    return ({ num: newNum, myId: index, ...item });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Roll</th>
          <th>Delete</th>
          <th>Hide</th>
          <th>Index</th>
          <th>Hide</th>
        </tr>
      </thead>
      <tbody>
        {listWithId.map((elem, index) => (
          elem.hide || (() => {
            <tr key={elem.myId}>
              <td>{elem.num}</td>
              <td>{elem.roll}</td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteNumber(index)}
                  tabIndex={0}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => hideItem(index)}
                  tabIndex={0}
                >
                  Hide
                </button>
              </td>
              <td>{index}</td>
              <td>{(elem.hide === false) ? '0' : '1'}</td>
            </tr>;
          })
        ))}
      </tbody>
    </table>
  );
}

export default App;
