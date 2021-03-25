import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import todoList from "./components/todoList";

function App() {
  //setiing states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] =useState([]);
  const [status, setStatus] =useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    filterHandler();
  }, [todos, status]);


  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed == True));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed == False));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };


  return (
    <div className="App">
    <header>
      <h1>Jacob Copleys Tasks </h1>
    </header>
      <Form 
        inputText = {inputText}
        todos = {todos}
        setTodos = {setTodos}
        setInputText= {setInputText}
        setStatus = {setStatus}
        />
      <todoList 
        setTodos ={setTodos}
        todos = {todos}
        filteredTodos = {filteredTodos}
        />
    </div>
   );
}

export default App;
