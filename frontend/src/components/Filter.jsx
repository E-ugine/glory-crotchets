import { useState } from "react";

export default function Filter({ filters, setFilters }) {
  return (
    <div className="w-1/4 bg-white p-4 rounded shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Category</h3>
        {["Bedroom", "Sofa", "Office", "Outdoor"].map((category) => (
          <label key={category} className="block">
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={(e) => {
                setFilters((prev) => ({
                  ...prev,
                  categories: e.target.checked
                    ? [...prev.categories, category]
                    : prev.categories.filter((c) => c !== category),
                }));
              }}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Price Range</h3>
        <input
          type="number"
          placeholder="Min"
          value={filters.minPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
          className="border p-1 w-20 mr-2"
        />
        <input
          type="number"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
          className="border p-1 w-20"
        />
      </div>

      {/* Sorting */}
      <div className="mb-4">
        <h3 className="text-md font-semibold">Sort By</h3>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
          className="border p-1 w-full"
        >
          <option value="default">Default</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>
    </div>
  );
}
