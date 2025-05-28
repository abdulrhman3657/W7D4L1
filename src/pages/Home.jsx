import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function Home() {
  const [item, setItem] = useState([]);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [searchName, setSearchName] = useState("");

  const navigate = useNavigate();

  const check_data = () => {
    axios({
      method: "post",
      url: "https://682199fa259dad2655afc100.mockapi.io/characters",
      data: {
        image: image,
        name: name,
        gender: gender,
      },
    }).then(() => {
      window.location.reload();
    });
  };

  const Search = () => {
    let result = item.find((character) => {
      return character.name == searchName;
    });

    if (result) {
      setItem([result])
       // navigate(result.id);
      // console.log(result);
    } else {
      Swal.fire({
        title: "oops!",
        text: "charachter not found",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    // console.log("hello");
    fetch(`https://682199fa259dad2655afc100.mockapi.io/characters`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setItem(data);
      });
  }, []);

  return (
    <div className="bg-green-100 flex flex-col items-center justify-center">

      <div className="lg:flex justify-center items-center">
        <div className="flex  gap-2 p-3">
          <input
            type="text"
            className="bg-gray-50 border   border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2"
            placeholder="Search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button
            className="rounded text-white bg-green-500 hover:bg-green-900 px-1 text-center"
            onClick={Search}
          >
            Search
          </button>
        </div>

        <div className="flex flex-col gap-2 p-3">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Add new character
          </h1>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2"
            placeholder="image"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2"
            placeholder="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2"
            placeholder="gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <button
            className="rounded p-1 text-white bg-green-500 hover:bg-green-900 text-center"
            onClick={check_data}
          >
            Add
          </button>
        </div>
      </div>

      <div className="lg:w-9/10">
        <ul className="p-5 flex flex-wrap justify-center  gap-3">
          {item.map((element, index) => (
            <li key={index}>
              <div className=" flex flex-col justify-around h-[50vh]  w-[35vh] p-3 rounded bg-white  hover:translate-1 transition delay-50 shadow-2xl">
                <div className="flex flex-col gap-5">
                  <p className="text-center">{element.name}</p>
                  <img className="rounded-xl" src={element.image} alt="" />
                </div>
              </div>  
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
