import React from "react";
import Clubs from "./Components/Clubs";
import Navbar from "./Components/Navbar";
import Add from "./Components/Action/Add";
import Info from "./Components/Action/Info";

function App() {
  const [add, setAdd] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [info, setInfo] = React.useState(false);
  const [listKey, setListKey] = React.useState();
  const [edit, setEdit] = React.useState([]);
  return (
    <div className="App">
      <Navbar  setAdd={setAdd} />
      
      <Clubs
        list={list}
        setList={setList}
        setEdit={setEdit}
        setListKey={setListKey}
        setInfo={setInfo}
      />
      <Add add={add} setAdd={setAdd} list={list} setList={setList} />

      <Info
        info={info}
        setInfo={setInfo}
        list={list}
        setList={setList}
        listKey={listKey}
        edit={edit}
      />
    </div>
  );
}

export default App;
