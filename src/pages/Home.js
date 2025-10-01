import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

export const Home = (props) => {
  let homeStyle = {
    minHeight: "86vh",
  };

  return (
    <>
      <div style={homeStyle}>
        <AddTodo addTodo={props.addTodo} />
        <Todos todos={props.todos} onDelete={props.onDelete} />
      </div>
    </>
  );
};
