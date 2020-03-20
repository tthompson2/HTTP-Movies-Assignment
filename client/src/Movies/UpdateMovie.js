import React, {useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {

    id : " ",
    title: " ",
    director: " ",
    description: " ",
    stars: " "

}

const UpdateMovie = props => {
    const [selectedMovie, setSelectedMovie] = useState(initialMovie);

    useEffect(() => {
        const itemToUpdate = props.items.find(item => {
            return `${item.id}` === props.match.params.id
        });
    

    console.log("itemToUpdate", itemToUpdate);

    if(itemToUpdate) {
        setSelectedMovie(itemToUpdate);
    }

    const changeHandler = event => {
        event.persist();

        let value = event.target.value;
        if(event.target.value === 'price') {
            value = parseInt(value, 10); // this is a type of input checker, and is used by the program to
        }

        setSelectedMovie({
            ...selectedMovie,
            [event.target.name]: value
        });

    };
  
    const handleSubmit = e => {
        e.preventDefault();

        axios
          .put('http://localhost:5000//')
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          });
    }

}, [props.items, props.match.params.id]);

   return (
       <div>
           <h2>Update Movie</h2>
           <form onSubmit={handleSubmit}>
               <input 
                  type="text"
                  name="title"
                  onChange={changeHandler}
                  placeholder="title"
                  value={movie.name}
                />
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="title"
                />
           </form>
       </div>
   )

}

export const UpdateMovie;