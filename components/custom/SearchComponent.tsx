"use client";

import React from "react";
import SearchForm from "./SearchForm";

const SearchComponent = () => {
  return (
    <div className="flex flex-col -mt-16 w-full p-4 py-10 items-start gap-x-2 rounded-2xl bg-dark-700 ring-1 ring-inset ring-dark/5">
      <SearchForm />
    </div>
  );
};

export default SearchComponent;
