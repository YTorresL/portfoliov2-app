import { useState } from "react"

export function useImages() {
  const [selectedImage, setSelectedImage] = useState(0)

  const handleSelectImage = (index: number) => {
    setSelectedImage(index)
  }
  return { selectedImage, handleSelectImage }
}
