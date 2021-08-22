import React from "react";
import "./ListItem.css";
const ListItem = ({ options, onClickFunction, loading, searchWord }) => {
 
      if (loading === true) {
    return <div className="loader">Loading......</div>;
  }

  if (searchWord.length == 0) {
    return "";
  }
  console.log(options.entries);

  return (
    <ul className="SearchList">
      {options?.count === 0 ? (
        <div className="not-found">Oops...! No item found</div>
      ) : (
        ""
      )}
      {options?.entries?.length > 0 &&
        options?.entries?.map((value, index) => (
          <li
            key={`${value.API}-${index}`}
            onClick={() => onClickFunction(value)}
          >
            {value.API}
          </li>
        ))}
    </ul>
  );
};
export default ListItem;
