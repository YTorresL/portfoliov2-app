export function ProjectsCategories({
  categories,
  currentCategory,
  onCategoryChange,
}: {
  categories: string[]
  currentCategory: string
  onCategoryChange: (category: string) => void
}) {
  return categories.map((category) => (
    <button
      key={category}
      className={`border px-3 py-1.5 rounded-lg text-primary capitalize transition-colors hover:bg-primary hover:text-white hover:border-white ${
        category === currentCategory ? "border-secondary" : "border-black"
      }`}
      name="category"
      value={category}
      onClick={() => onCategoryChange(category)}
    >
      {category}
    </button>
  ))
}
