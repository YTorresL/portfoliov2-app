"use client"
import { useImages } from "../../projectsList/hooks/useImages"

export function ImagesSlider({ images }: { images: string[] }) {
  const { selectedImage, handleSelectImage: setSelectedImage } = useImages()
  return (
    <aside>
      <div className="lg:sticky lg:top-8 lg:h-fit">
        <div className="mb-4 overflow-hidden rounded-2xl border border-black">
          <div className="aspect-video">
            <img
              src={images[selectedImage]}
              alt={"Image " + (selectedImage + 1) + " of project"}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index + image}
              onClick={() => setSelectedImage(index)}
              className={`overflow-hidden rounded-lg transition-all ${
                selectedImage === index
                  ? "border-secondary border-2"
                  : "border-black hover:border-gray-300 border"
              }`}
            >
              <div className="aspect-square">
                <img
                  src={image}
                  alt={"Thumbnail " + (index + 1) + " of project"}
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
