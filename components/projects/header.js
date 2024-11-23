export function Header({ category, filters, handleChange }) {
    return (<button
        className={`border px-3 py-1.5 rounded-lg text-[#445334] capitalize transition-colors ${
            category === filters.category
            ? "border-[#F6AA19]"
            : "border-black"
        }`}
        name="category"
        value={category}
        onClick={handleChange}
      >
        {category}
      </button>)
}