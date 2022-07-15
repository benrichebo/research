import React from "react";
import { useCrud } from "../../hooks/useCrud";

function CategorySelect({setCategory, category}) {
  const { allData, postLoading, postError, error, loading, message } =
    useCrud("all-categories", "/api/categories");
  return (
    <>
      <select
        className="form-select form-select-lg rounded-0"
        onChange={(e) => setCategory(e.target.value)}
        id="category">
        <option value="">--select category--</option>
        {category && <option value={category?.name}>={category?.name}</option>}
        {allData &&
          allData?.map((category) => (
            <option value={category?.name}>{category?.name}</option>
          ))}
      </select>
    </>
  );
}

export default CategorySelect;
