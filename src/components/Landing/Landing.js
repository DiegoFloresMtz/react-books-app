import React, { useState } from "react";
import { Button, TextInput } from "@primer/react";
import {
    List,
    ListItem,
    BookTitle,
    Filters,
    Container
} from "../../components";
import { VisibilityFilters, getFilteredBookListAndCounts } from "../../utils/index";

const initialBooks = [
    { title: "El ocho", read: false },
    { title: "México Barbaro", read: false },
    { title: "Atlas México", read: false }
];

export default function Landing() {
    const [aBook, setABook] = useState("");
    const [BooksList, setABookList] = useState(initialBooks);
    const [visibilityFilter, setVisibilityFilter] = useState(
        VisibilityFilters.ALL
    );

    const onSubmit = evt => {
        evt.preventDefault();
        if (aBook === "") return;
        setABookList([{ title: aBook, read: false }, ...BooksList]);
        setABook("");
    };

    const onBookRead = index => {
        const newBookList = [...BooksList];
        BooksList[index].read = !BooksList[index].read;
        setABookList(newBookList);
    };

    const { filteredList, ...counts } = getFilteredBookListAndCounts(
        BooksList,
        visibilityFilter
    );
    return (
        <Container>
            <h1>React Books's Readlist</h1>
            <form onSubmit={onSubmit} style={{ width: "100%", marginTop: "1rem" }}>
                <div>
                    <TextInput
                        aria-label="books"
                        name="books"
                        placeholder="Books Here"
                        value={aBook}
                        onChange={ev => setABook(ev.target.value)}
                        marginRight="0.5rem"
                        style={{ flexGrow: 1 }}
                    />
                    <Button type="submit">Add</Button>
                </div>
            </form>
            <Filters
                visibilityFilter={visibilityFilter}
                onVisibilityFilterChange={setVisibilityFilter}
                {...counts}
            />
            <List>
                {filteredList.map((item, index) => (
                    <ListItem key={`${item.title}_${index}`}>
                        <BookTitle read={item.read}>{item.title}</BookTitle>
                        <input
                            type="checkbox"
                            checked={item.read}
                            onChange={() => onBookRead(index)}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
