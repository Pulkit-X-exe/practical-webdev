import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

let api = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(api).then((res) => res.json()).then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {alert("Error fetching data:");
        setLoading(false);
      });
  }, []);

  return(
    <div className="app">
     <Navbar />
            {data.map((post) => (
                <div key={post.id} className="card">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-body">{post.body}</p>
                </div>
            ))}
          </div>
  )


}

export default App;
