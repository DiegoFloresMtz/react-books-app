import React, { useState, useEffect } from "react";
import localforage from "localforage";
import List from "../List/List";
import "../../styles/index.css";


function Landing() {
    const initialState = [
        { name: "El ocho", status: true },
        { name: "México Barbaro", status: true },
        { name: "Atlas México", status: true }
    ];
    const [books, setBooks] = useState([]);
    const [bookVals, setBookVals] = useState(initialState);
    const [value, setValue] = useState("");

    useEffect(() => {
        localforage.setItem("books", books);
    }, [books]);

    useEffect(() => {
        localforage.getItem("books", (_, value) => {
            if (value) setBooks(value);
        });
    }, []);

    const onSubmit = evt => {
        evt.preventDefault();
        if (books === "") return;
        setBookVals([{ title: books, status: false }, ...bookVals]);
        setBooks("");
    };
    
    const onValueChange = ({ target: { value } }) => {
        setValue(value);
    };
    

    const addBook = () => {
        if (value !== "") {
            setBooks([
                ...books,
                {
                    name: value,
                    status: false,
                    id: Date.now() + Math.random()
                }
            ]);
            setValue("");
        }
    };

    const handleKeyPress = ({ key }) => {
        if (key === "Enter") {
            addBook();
        }
    };

    const handleCheckboxChange = id => {
        setBooks(
            books.map(book => {
                if (book.id === id) return { ...book, status: !book.status };
                return book;
            })
        );
    };

    const deleteBook = id => {
        setBooks(books.filter(book => book.id !== id));
    };

    return (
        <div className="container">
            <h1>React Books Wishlist</h1>
            <p>
                <label>Add a Book</label>
                <input
                    id="new-task"
                    type="text"
                    value={value}
                    name="todoField"
                    onKeyDown={handleKeyPress}
                    onChange={onValueChange}
                />
                
            </p>
            <button onClick={addBook}>Add</button>
            <h3>Book List</h3>
            <ul id="incomplete-tasks">
                {books
                    .filter(book => !book.status)
                    .map(book => (
                        <List
                            book={book}
                            handleCheckboxChange={handleCheckboxChange}
                            deleteBook={deleteBook}
                        />
                    ))}
            </ul>

            <h3>Wishlist</h3>
            <ul id="completed-tasks">
                {books
                    .filter(book => book.status)
                    .map(book => (
                        <List
                            book={book}
                            handleCheckboxChange={handleCheckboxChange}
                            deleteBook={deleteBook}
                        />
                    ))}
            </ul>
        </div>
    );
}

export default Landing