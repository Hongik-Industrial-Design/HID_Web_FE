import { JSX } from 'react/jsx-runtime';

import { PlusIcon } from '@icons/Plus';

import * as S from './AddArtworkButton.styled';

const AddArtworkButton = (): JSX.Element => {
  return (
    <S.AddArtworkButtonLink to="register">
      <PlusIcon />
      Add Artwork
    </S.AddArtworkButtonLink>
  );
};

export default AddArtworkButton;
