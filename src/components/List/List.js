import React from "react";

const List = ({ book, handleCheckboxChange, deleteBook, bookVals }) => (
    <li id={book.id}>
        <input
            type="checkbox"
            checked={book.status}
            onChange={() => handleCheckboxChange(book.id)}
        />
        <label>{book.name}</label>
        <button className="delete" onClick={() => deleteBook(book.id)}>
            Delete
        </button>
    </li>
);

export default List;
