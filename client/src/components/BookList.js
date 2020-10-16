import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../queries/queries";

export default function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  //   console.log(`this is data:`, data);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ops! Something went wrong</p>;
  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}
