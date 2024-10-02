import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Course() {

const [book,setBook] = useState([]);
useEffect(() =>{
const getBook = async () =>{
try{
  const res = await axios.get("http://localhost:4001/book");
  console.log(res.data);
  setBook(res.data);

}catch(error){
  console.log(error);
}
};
getBook();

},[]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="pt-20 text-2xl font-semibold md:text-4xl">
            We are Delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>

          <p className="mt-12">
            lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet
          </p>
         <Link to="/">
         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
         </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {book.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
