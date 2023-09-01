import { styled } from "styled-components";

import { useGetGalleryQuery } from "../api/features/apiSlice";
import { GalleryFilters } from "../types";
import Card from "./Card";
import Image from "./Media/Image";
import Video from "./Media/Video";
import { useEffect, useMemo, useState } from "react";
import GalleryItemModal from "./GalleryItemModal";

enum MediaFormat {
  Image = "image",
  Video = "video",
}

const GalleryWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const GalleryContainer = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const GalleryItem = styled.div`
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05); /* Escalar ligeramente en el hover */
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(39, 38, 44, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;

  z-index: 100;
`;

interface GalleryProps {
  currentGalleryFilters: GalleryFilters;
  includeVirals: boolean;
  showVideos: boolean;
}

interface MediaFullContent {
  title: string;
  description: string | null;
  link: string;
  type: string;
  ups: number;
  downs: number;
  score: number;
}

const defaultMediaFullContent: MediaFullContent = {
  title: "",
  description: "",
  link: "",
  type: "",
  ups: 0,
  downs: 0,
  score: 0,
};

const Gallery: React.FC<GalleryProps> = ({ currentGalleryFilters, includeVirals, showVideos }) => {
  const { data, isLoading, isSuccess, isFetching } = useGetGalleryQuery({ ...currentGalleryFilters, page: 1 });

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentMediaData, setCurrentMediaData] = useState<MediaFullContent>(defaultMediaFullContent);

  const GalleryItems = useMemo(() => {
    if (!isSuccess || !data) return [];
    return data.map(({ title, images, id, in_most_viral, downs, ups, score }) => {
      if (!images || (in_most_viral && !includeVirals)) return null;

      const { type, link, description } = images[0];
      let children;

      if (type.includes(MediaFormat.Video) && !showVideos) return null;

      if (type.includes(MediaFormat.Image))
        children = <Image title={title || ""} url={link} height="233px" width="300px" />;
      if (type.includes(MediaFormat.Video)) children = <Video title={title || ""} url={link} />;
      return (
        <GalleryItem
          key={id}
          onClick={() => handleGalleryItemClick({ title, type, description, link, downs, ups, score })}
        >
          <Card title={title} key={title}>
            {children}
          </Card>
        </GalleryItem>
      );
    });
  }, [isSuccess, data, includeVirals, showVideos]);

  const handleGalleryItemClick = (mediaData: MediaFullContent) => {
    setCurrentMediaData(mediaData);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {}, [currentMediaData]);

  return (
    <GalleryWrapper>
      <GalleryContainer>
        {isLoading || isFetching ? (
          <LoadingOverlay>
            <p>Loading...</p>
          </LoadingOverlay>
        ) : (
          GalleryItems
        )}
      </GalleryContainer>
      <GalleryItemModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        mediaUrl={currentMediaData.link}
        mediaType={currentMediaData.type}
        title={currentMediaData.title}
        description={currentMediaData.description}
        score={currentMediaData.score}
        ups={currentMediaData.ups}
        downs={currentMediaData.downs}
      />
    </GalleryWrapper>
  );
};

export default Gallery;
