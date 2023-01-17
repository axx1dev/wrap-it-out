import { useState, useEffect, useCallback } from "react";
import { addUser, update } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Input, Button } from "@material-tailwind/react";
import debounce from "lodash.debounce";

const FormAddUsers = () => {
    const params = useParams()
    const users = useSelector(state => state.counters)
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        age: 0
    })

    const handleChange = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (params.id) {
            dispatcher(update(user))
        } else {
            e.preventDefault();
            dispatcher(
                addUser({
                    ...user,
                    id: uuid(),
                })
            );
            navigate('/list-team-users')
        }
    };

    const debouncedChangeHandler = useCallback(debounce(handleChange, 300), [])

    useEffect(() => {
        if (params.id) {
            setUser(users.data.find(us => us.id === params.id))
        }
    }, [])

    return (
        <>
            <form className="absolute mt-32">
                <Input
                    name="name"
                    onChange={handleChange}
                    placeholder="name"
                    variant="outlined" 
                    label="Nombre"
                    value={user?.name}
                />
                <Input
                    name="age"
                    onChange={handleChange}
                    variant="outlined" 
                    label="Edad"
                    value={user?.age}
                />
                <Button variant="outlined" size="sm" ripple={true} onClick={handleSubmit}>Guardar</Button>
            </form>
            <Link className="absolute mt-16" to={'/list-team-users'}><Button variant="outlined" size="sm">Listado de usuarios</Button></Link>
        </>
    );
};

export default FormAddUsers;
