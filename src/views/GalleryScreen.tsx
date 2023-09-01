import { styled } from "styled-components";
import { useState } from "react";

import Gallery from "../components/Gallery";
import { GallerySectionOptions, GalleryWindowOptions, GallerySortOptions } from "../api/config/galleryOptions";
import { GalleryFilters } from "../types";
import NavBar from "../components/Navbar";

const Wrapper = styled.div``;

const defaultGalleryFiltes: GalleryFilters = {
  section: GallerySectionOptions.Hot,
  sort: GallerySortOptions.Viral,
  window: GalleryWindowOptions.Day,
};

const GalleryScreen = () => {
  const [galleryFilters, setGalleryFilters] = useState<GalleryFilters>(defaultGalleryFiltes);
  const [includeVirals, setIncludeVirals] = useState<boolean>(true);
  const [showVideos, setShowVideos] = useState<boolean>(false);

  const handleIncludeViralsChange = (): void => {
    setIncludeVirals((prev) => !prev);
  };

  const handleShowVideos = (): void => {
    setShowVideos((prev) => !prev);
  };

  const handleGalleryFiltersChange = (optionName: keyof GalleryFilters, newValue: string) => {
    setGalleryFilters((prevOptions) => ({
      ...prevOptions,
      [optionName]: newValue,
    }));
  };

  return (
    <Wrapper>
      <NavBar
        currentGalleryFilters={galleryFilters}
        onFiltersChange={handleGalleryFiltersChange}
        includeVirals={includeVirals}
        onIncludeViralsChange={handleIncludeViralsChange}
        showVideos={showVideos}
        onShowVideosChange={handleShowVideos}
      />
      <Gallery currentGalleryFilters={galleryFilters} includeVirals={includeVirals} showVideos={showVideos} />
    </Wrapper>
  );
};

export default GalleryScreen;
