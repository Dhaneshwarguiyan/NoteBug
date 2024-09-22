import React, { useState } from "react";

const SearchBar = () => {
  const [data, setData] = useState("");
  function clickHandler(){
        console.log(data)
  }
  function changeHandler(e){
    setData(e.target.value);
  }
  return (
    <div className="w-full flex justify-center gap-4">
      <input
        type="text"
        placeholder="Search"
        value={data}
        name="search"
        onChange={changeHandler}
        className="px-6 outline-none text-slate-900 py-2 rounded-3xl mt-4 text-lg"
      />
      <button className="bg-green-600 px-5 py-1 rounded-3xl mt-4 text-lg text-slate-900" onClick={clickHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
