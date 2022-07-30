import React from "react";
import { useCrud } from "../../hooks/useCrud";

function CategorySelect({ setCategory, categoryExist }) {
  const { allData } = useCrud("all-categories", "/api/categories");
  console.log("categories", allData)

  return (
    <>
      <select
        className="form-select rounded-0"
        onChange={(e) => setCategory(e.target.value)}
        id="category"
        value={categoryExist}>
        <option value="">--select category--</option>
        <option defaultValue={categoryExist}>{categoryExist}</option>
        {allData &&
          allData?.map((category) => (
            <option
              key={category?._id}
              value={category?.name}
              defaultValue={categoryExist}>
              {category?.name}
            </option>
          ))}
      </select>
    </>
  );
}

export default CategorySelect;
