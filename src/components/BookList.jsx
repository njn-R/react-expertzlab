import { BookCard } from "./BookCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const BookList = () => {  
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=mklIwi4vWKfyd8SDb5yjzj5BegmGSDaQ")
        .then(response => setBooks(response.data.results.books))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="card-row"> 
            {books.map((book, index) => {
              return <BookCard key={index} {...book} />
            })}
        </div>      
  )
}
