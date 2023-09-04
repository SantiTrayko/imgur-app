import { useEffect, useMemo, useState } from "react";

import { useGetGalleryQuery } from "../api/features/apiSlice";
import { GalleryFilters } from "../types";
import Card from "./Card";
import Image from "./Media/Image";
import Video from "./Media/Video";
import GalleryItemModal from "./GalleryItemModal";
import { GalleryItem, GalleryWrapper, GalleryContainer, LoadingOverlay } from "./GalleryStyled";

enum MediaFormat {
  Image = "image",
  Video = "video",
}
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

      if (type.includes(MediaFormat.Image)) children = <Image url={link} height="233px" width="300px" />;
      if (type.includes(MediaFormat.Video)) children = <Video url={link} />;
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
