import { ArtistsFormData } from '@schemas/registerSchema';

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

export const handleProfileImageDrop = (
  e: React.DragEvent<HTMLLabelElement>,
  artistId: number,
  setArtistProfileImage: React.Dispatch<React.SetStateAction<ArtistsFormData>>,
  setIsProfileImageDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];

  if (file) {
    setArtistProfileImage((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === artistId ? { ...artist, profileImgFile: file } : artist
      )
    );
    setIsProfileImageDragging(false);
  }
};
