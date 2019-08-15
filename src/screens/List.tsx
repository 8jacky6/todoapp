import React, { Fragment, useState } from "react";
import { InputGroup, FormControl, Form } from "react-bootstrap";

/**Alis erzeugen */
type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
    text: string;
    complete: boolean;
}

export const List = () => {
    const [value, setValue] = useState<string>("");

    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleSubmit = (e: FormElem): void => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    const addTodo = (text: string): void => {
        const newTodos: ITodo[] = [...todos, { text, complete: false }];
        setTodos(newTodos);
    };

    const completeTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    };

    const removeTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos];
        newTodos.splice(index, 1); //[0, 1, 2, 3].splice(2, 1) => "2" wird rausgenommen
        setTodos(newTodos);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
                <button type="submit">Add to list</button>
            </form>

            <section>
                {todos.map((todo: ITodo, index: number) => (
                    <Fragment key={index}>
                        <div style={{ textDecoration: todo.complete ? "line-through" : "" }}>{todo.text}</div>
                        <button type="button" onClick={() => completeTodo(index)}>
                            {todo.complete ? "Incomplete" : "Complete"}
                        </button>
                        <button type="button" onClick={() => removeTodo(index)}>
                            delete
                        </button>
                    </Fragment>
                ))}
            </section>
        </Fragment>
    );
};

/* export const List = () => {
    /*Funktion um eingegebenen Text aufzulisten*/
/*     const [value, setValue] = useState<string>("");

    const handleSubmit = (e: FormElem): void => {
        e.preventDefault();
        setValue("");
    };

    return (
        <Fragment>
            <h1>Things to do</h1>
            <h2>Must do Today</h2>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Your tasks for today"
                    aria-label="Your tasks for today"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">Add to list</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <h4>Here you got your tasks:</h4>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check className="checkboxes" type="checkbox" label="Check me out" />
            </Form.Group>
            <h2>Schedule &amp; To do</h2>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Your tasks for later"
                    aria-label="Your tasks for later"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">Add to list</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <h4>Here you got your tasks:</h4>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check className="checkboxes" type="checkbox" label="Check me out" />
            </Form.Group>
        </Fragment>
    );
}; */
