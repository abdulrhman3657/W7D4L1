import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

function DisplayCard() {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  console.log(id)

  useEffect(() => {
    console.log("hello");
    fetch(
      `https://682199fa259dad2655afc100.mockapi.io/characters/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setItem(data);
      });
  }, [id]);

  

  return (
    <div className="flex flex-col items-center gap-3 h-auto bg-linear-to-r from-gray-300 to-green-300">
      {
        <div className="p-3 lg:w-8/10">
          <div className="flex flex-col lg:flex-row items-center gap-5 py-5 bg-white rounded-xl p-3">
            <img
              className="rounded-xl lg:w-100 h-100"
              src={item.image}
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1>
                <span className="font-bold text-2xl">{item.name}</span>
              </h1>
              <h1>
                <span className="text-gray-800">gender:</span> <span className="font-bold">{item.gender}</span>
              </h1>
              <Link
                to={"../"}
                className="my-5 rounded p-1 w-30 lg:text-xl flex justify-center items-center gap-1 text-white bg-green-500 hover:bg-green-900 text-center"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Go Back</span>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default DisplayCard;
