import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductList() {

    const [posts, setPosts] = useState([]);

    function buttonClicked() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
              console.log(res.data);
              setPosts(res.data);
          });
    }

    useEffect(() => {
        buttonClicked();
    }, [])

    return (
        <React.Fragment>
            <p>
                <button onClick={buttonClicked}>get data</button>
            </p>
            <ul>
                {
                    posts.map((prop, idx) =>  {
                        return (
                            <li key={idx}>
                                <p>글 번호 : {prop.id}</p>
                                <p>{prop.title}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </React.Fragment>
    );
}