export const TYPO_STYLES = {
  FAMILY: {
    CORN: "corn",
    SILLY: "silly",
  },
  SIZE: {
    XS: "xs",
    "2XL": "2xl",
    "3XL": "3xl",
    "6XL": "6xl",
    "8XL": "8xl",
  },
  WEIGHT: {
    BOLD: "bold",
  },
  COLOR: {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    LINEN: "linen",
    BLACK: "black",
  },
}

const textFamily = {
  corn: "font-corn",
  silly: "font-silly",
}

const textSizes = {
  xs: "text-xs",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "6xl": "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "8xl": "text-4xl md:text-6xl lg:text-7xl xl:text-8xl",
}

const textWeights = {
  bold: "font-bold",
}

const textColors = {
  primary: "text-primary",
  secondary: "text-secondary",
  linen: "text-linen",
  black: "text-black",
}

export function Typography({
  children,
  family,
  size,
  weight,
  color,
  others,
  props,
  tag,
}) {
  const styles = [
    family && textFamily[family],
    size && textSizes[size],
    weight && textWeights[weight],
    color && textColors[color],
    others,
  ]
    .filter(Boolean)
    .join(" ")

  const Tag = tag || "p"

  return (
    <Tag className={styles} {...props}>
      {children}
    </Tag>
  )
}
