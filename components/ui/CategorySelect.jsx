import React from "react";
import { useCrud } from "../../hooks/useCrud";

function CategorySelect({ setCategory, categoryExist }) {
  const { allData } = useCrud("all-categories", "/api/categories");

  return (
    <>
      <select
        className="form-select rounded-0"
        onChange={(e) => setCategory(e.target.value)}
        id="category">
        <option value="">--select category--</option>

        {allData &&
          allData?.map((category) => (
            <option
              value={category?.name}
              selected={categoryExist == category.name}>
              {category?.name}
            </option>
          ))}
      </select>
    </>
  );
}

export default CategorySelect;
