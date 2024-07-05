import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, settodo] = useState("");
  const [todoarr, settodoarr] = useState([]);

  const handleAdd = () => {
    settodoarr([...todoarr, {id:uuidv4(), todo, isCompleted: false }]);
    settodo("");
    console.log(todoarr);
  };
  const handleComplete = () => {};
  const handleDelete = () => {
    // alert("deleted shit");
  };
  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todoarr.findIndex(item =>{
      return item.id == id;
    })
    
    let newtodos = [...todoarr];
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    settodoarr(newtodos) 
    console.log(newtodos)
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-200 rounded-xl mx-9 my-4 min-h-[80vh]">
        <div className="addtodo mx-4">
          <h1 className="text-xl font-bold">Add Kaam</h1>
          <input
            className="my-3 w-1/4"
            onChange={handleChange}
            value={todo}
            type="text"
          />
          <div className="my-3">
            <button
              onClick={handleAdd}
              type="button"
              className=" bg-green-800 hover:font-bold text-white p-1"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>

        <div className="todos mx-4 my-4">
          <h1 className="text-xl font-bold">Your Todos</h1>
          {/* tile start */}
          {todoarr.map((item) => {
            return ( 
              <div key={item.id} className="mytodo flex my-3 h-10 items-center justify-between bg-orange-400 rounded-lg px-4">
              <input type="checkbox" onChange={handleCheckbox} value={item.isCompleted} name={item.id} id="" />
                <p className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </p>
                <div className="flex buttons gap-6">
                  <button onClick={handleComplete} type="button" className="hover:font-bold bg-green-800 text-white p-1"> Completed </button>
                  <button
                    onClick={handleDelete} type="button" className="hover:font-bold bg-green-800 text-white p-1">Delete </button>
                </div>
              </div>
            );
          })}

          {/* tile end */}
        </div>
      </div>
    </>
  );
}

export default App;
