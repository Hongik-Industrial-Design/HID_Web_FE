import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ArtworkInfo } from './Artwork.types';

import HeroSection from '@pages/Exhibition/Detail/HeroSection/HeroSection';
import ArtworkSection from '@pages/Exhibition/Detail/ArtworkSection/ArtworkSection';
import TeamMembersSection from './TeamMemberSection/TeamMembersSection';

import * as S from './ExhibitionDetail.styled';

const ExhibitionDetail = (): JSX.Element => {
  const [artworkInfos, setArtworkInfos] = useState<ArtworkInfo[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  // Extract URL id value & parse string into a number
  const { id } = useParams();
  const currentPage = id ? parseInt(id) : 1;

  // Find corresponding Artwork matched with URL id
  const individualArtworkInfos = artworkInfos.find(
    (artwork) => artwork.id === currentPage
  );

  console.log('Individual Artwork Infos: ', individualArtworkInfos);

  // Fetching Entire Artwork Infos
  useEffect(() => {
    const fetchArtworkInfos = async () => {
      try {
        const response = await axios.get('/data/artwork.json');
        const entireArtworkInfos = response.data;

        console.log('Artwork List: ', entireArtworkInfos);
        console.log('Exhibition Total Pages: ', entireArtworkInfos.length);

        setArtworkInfos(entireArtworkInfos);

        // Number of Artworks (artworkInfos is populated, calculate totalPages)
        setTotalPages(entireArtworkInfos.length);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchArtworkInfos();
  }, []);

  return (
    <S.ExhibitionDetailWrapper>
      <S.ExhibitionDetailContainer>
        <HeroSection
          fetchedData={individualArtworkInfos?.heroSection}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        <ArtworkSection
          fetchedData={individualArtworkInfos?.media}
          currentPage={currentPage}
        />
      </S.ExhibitionDetailContainer>
      <TeamMembersSection membersData={individualArtworkInfos?.authorInfos} />
    </S.ExhibitionDetailWrapper>
  );
};

export default ExhibitionDetail;
