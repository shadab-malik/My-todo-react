import React from 'react'
import Todo from "./Todo";
export default function Todos(props) {
    const contstyle = {
        minHeight: "60vh",
        margin: "45px auto"
    }
    return (
      <div className="container " style={contstyle}>
        <h3 className=" my-4 text-info ">ToDOs List</h3>
        {props.todos.length === 0
          ? "You didn't plan anthing yet!"
          : props.todos.map((todo) => {
              return (<Todo todo={todo} key= {todo.sno} onDelete={props.onDelete} /> 
                      )
            })}
      </div>
    );
}
