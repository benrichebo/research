import React from "react";

function Search({ items, keyword, setKeyword }) {
  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      <form className="form-inline my-lg-0 d-none">
        <div className="form-group">
          <input
            type="search"
            value={keyword}
            onChange={handleSearchChange}
            placeholder="Search..."
            aria-label="Search"
            disabled={!items?.length === 0}
            className="form-control"
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          />
        </div>
      </form>
    </>
  );
}

export default Search;
