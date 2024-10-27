import { useState } from 'react'

interface ImageUploaderProps {
  onChange?: (image: string | null) => void // Callback for when the image changes
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onChange }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageUrl = reader.result as string
        setImageSrc(imageUrl)
        if (onChange) {
          onChange(imageUrl) // Call the onChange callback
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex h-[400px] items-center justify-center rounded-3xl bg-[#E3E3E3] relative cursor-pointer">
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageUpload}
      />
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Uploaded"
          className="h-full w-full object-cover rounded-3xl"
        />
      ) : (
        <span className="text-black">
          <img
            src="https://res.cloudinary.com/dsutqg1fy/image/upload/v1729598282/camera_black_bfz1eu.svg"
            alt="camera-icon"
          />
        </span>
      )}
    </div>
  )
}

export default ImageUploader
