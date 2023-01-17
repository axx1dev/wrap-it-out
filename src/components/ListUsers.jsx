import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/counter/counterSlice";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const ListUsers = () => {
  const counterState = useSelector((state) => state.counters);
  const dispatcher = useDispatch();

  const handleDelete = (id) => {
    dispatcher(deleteUser(id));
  };

  return (
    <div className="absolute mt-32">
      {counterState.data.map((item) => (
        <div key={item.id} className="flex w-max items-end gap-4">
          <h3>{item.name} - {item.age}</h3>
          <Button ripple={true} variant="outlined" size="sm" onClick={() => handleDelete(item.id)}>Eliminar</Button>
          <Link to={`/edit-user/${item.id}`}><Button ripple={true} variant="outlined" size="sm">Editar</Button></Link>
        </div>
      ))}
      <Link className="absolute mt-16" to={'/form-add-user'}>Crear usuarios</Link>
    </div>
  );
};

export default ListUsers;
