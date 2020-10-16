import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_AUTHORS_QUERY,
  ADD_BOOK_MUTATION,
  GET_BOOKS_QUERY,
} from "../queries/queries";

export default function AddBooks() {
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  const [addBookMut, { dataMutation }] = useMutation(ADD_BOOK_MUTATION);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading...</option>;
    if (error) return <option disabled>Error Loading authors</option>;
    if (data) {
      const { authors } = data;
      return authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, genre, authorId);
    addBookMut({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
      refetchQueries: [{ query: GET_BOOKS_QUERY }],
    });
  };

  return (
    <div>
      <form id="add-book" onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name</label>
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="field">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>

        <div className="field">
          <label>Author</label>
          <select
            value={authorId}
            onChange={(event) => setAuthorId(event.target.value)}
          >
            <option>Select author</option>
            {displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    </div>
  );
}
