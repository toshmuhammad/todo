import { useState } from "react";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "title 1", id: 1 },
    { title: "title 2", id: 2 },
    { title: "title 3", id: 3 },
  ]);

  const removeTodo = (id) => {
    const result = todos.filter((el) => el.id !== id);
    setTodos(result);
  };

  const editTodo = (id) => {
    const result = todos.map((el) => {
      if (el.id === id) {
        return { title: prompt("Yangi element kiriting"), id: el.id };
      } else {
        return el;
      }
    });

    setTodos(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = { title: formData.get("title"), id: Date.now() };
    setTodos([...todos, res]);
    e.target.reset();
  };

  return (
    <div className="uzb">
      <div>
        <form onSubmit={handleSubmit}>
          <input className="input" placeholder="Matn kiriting" name="title" type="text" />
          <button>Submit</button>
        </form>
      </div>
      <ul>
        {todos.map(({ title, id }) => (
          <li key={id}>
            <h3 className="title">{title}</h3>
            <button className="delete" onClick={() => removeTodo(id)}>Delete</button>
            <button className="edit" onClick={() => editTodo(id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}















// import { useState } from "react";

// export default function App() {
//   const [todos, setTodos] = useState([
//     { title: "title 1", id: 1 },
//     { title: "title 2", id: 2 },
//     { title: "title 3", id: 3 },
//   ]);
// }

// function removeTodo(id) {
//   const result = todos.filter((el) => el.id !== id);
//   setTodos(result);
// }

// function editTodo(id) {
//   const result = todos.map((el) => {
//     if (el.id === id) {
//       return { title: prompt("Yangi element kiriting"), id: el.id };
//     } else {
//       return el;
//     }
//   });

//   setTodos(result);
// }

// function handleSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const res = { title: formData.get("title"), id: Date.now() };
//   addTodo(res);
//   e.target.reset();
// }

// return (
//   <div>
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="Matn kiriting" name="title" type="text" />
//         <button>Submit</button>
//       </form>
//     </div>
//     <ul>
//       {todos.map(({ title, desc, id }) => {
//         return (
//           <li>
//             <h3>{title}</h3>
//             <button>Delete</button>
//             <button>Edit</button>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// )