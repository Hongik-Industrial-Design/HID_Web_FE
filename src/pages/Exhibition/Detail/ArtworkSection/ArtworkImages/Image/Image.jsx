/* eslint-disable react/prop-types */
import { ImageFile } from "./Image.styled";

const Image = ({ image }) => {
  return (
    <>
      <ImageFile src={image.url} alt={image.caption} />
    </>
  );
};

export default Image;
