import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGNhMmM1MDUzYThkZWVlZGNjNmVlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjIzNjM5NiwiZXhwIjoxNjY2NjY4Mzk2fQ.HLzbby4CUg8OBz-cQYuhcw5kkaIhnFPEKuFQykell3U",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
