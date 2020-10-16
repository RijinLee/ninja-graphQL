import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK_QUERY } from "../queries/queries";

export default function BookDetails(props) {
  const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
    skip: !props.bookId,
    variables: { id: props.bookId },
  });
  if (!props.bookId) return null;
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ops! Something went wrong</p>;

  let { book } = data;
  let content = (
    <div id="book-details">
      <h2>Name: {book.name}</h2>
      <p>Genre: {book.genre}</p>
      <p>Author: {book.author.name}</p>
      <p>All boooks by this author</p>
      <ul className="other-books">
        {book.author.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
  return <div id="book-details">{content}</div>;
}
