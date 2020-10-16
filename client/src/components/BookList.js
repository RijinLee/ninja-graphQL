import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../queries/queries";

// components
import BookDetails from "./BookDetails";

export default function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ops! Something went wrong</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return (
            <li
              key={book.id}
              onClick={() => {
                setSelected(book.id);
              }}
            >
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}
