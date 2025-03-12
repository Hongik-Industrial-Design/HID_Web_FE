export const handleImageDrop = (
  e: React.DragEvent<HTMLDivElement>,
  setFiles: React.Dispatch<React.SetStateAction<File[]>>,
  setIsImageDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  const files = Array.from(e.dataTransfer.files).filter((file) =>
    file.type.startsWith('image/')
  );

  if (files.length > 0) {
    setFiles((prevFiles) => [...prevFiles, ...files]);
    setIsImageDragging(false);
  }
};
