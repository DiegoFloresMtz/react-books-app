import React from "react";

const List = ({ book, handleCheckboxChange, deleteBook, bookVals }) => (
    <li key={book.id}>
        <input
            type="checkbox"
            checked={book.status}
            onLoadStart
            onChange={() => handleCheckboxChange(book.id)}
        />
        <label>{book.name}</label>
        <button className="delete" onClick={() => deleteBook(book.id)}>
            Delete
        </button>
    </li>
);

export default List;
