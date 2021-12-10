
import "./App.css";
import Header from "./Mycomponents/header";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import Addtodo from "./Mycomponents/Addtodo";
import About from "./Mycomponents/About";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";




function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
   }
     


  const addtodo = (title, desc) => {
    let sno = todos.length + 1;
    const mytodo = {
      sno:sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo])
 
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  

  }
  const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  return (
    <>
      <Router>
        <Header title="MY ToDOs" search={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

      

        <Footer />
      </Router>
    </>
  );
}

export default App;
