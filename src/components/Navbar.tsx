import styled from "styled-components";
import { GalleryFilters } from "../types";
import { GallerySectionOptions, GallerySortOptions, GalleryWindowOptions } from "../api/config/galleryOptions";
import Checkbox from "./Checkbox";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 20px 20px 10px 20px;
  background-color: #333;
  color: white;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  padding-right: 25px;
  padding-bottom: 10px;
`;

const FilterLabel = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-right: 8px;
`;

const StyledSelect = styled.select`
  padding: 8px;
  background-color: #444;
  color: #8b8686;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledOption = styled.option`
  background-color: #555;
  color: white;
`;

interface NavBarProps {
  currentGalleryFilters: GalleryFilters;
  onFiltersChange: (filterName: keyof GalleryFilters, newValue: string) => void;
  includeVirals: boolean;
  showVideos: boolean;
  onIncludeViralsChange: () => void;
  onShowVideosChange: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  currentGalleryFilters,
  onFiltersChange,
  includeVirals,
  onIncludeViralsChange,
  showVideos,
  onShowVideosChange
}) => {
  return (
    <NavbarContainer>
      <FilterGroup>
        <Checkbox onChange={onIncludeViralsChange} checked={includeVirals}>
          <span> Include Virals </span>
        </Checkbox>
        <Checkbox onChange={onShowVideosChange} checked={showVideos}>
          <span> Show Videos </span>
        </Checkbox>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Section: </FilterLabel>
        <StyledSelect
          value={currentGalleryFilters.section}
          onChange={({ target }) => onFiltersChange("section", target.value)}
        >
          {Object.keys(GallerySectionOptions).map((key) => (
            <StyledOption key={key} value={GallerySectionOptions[key as keyof typeof GallerySectionOptions]}>
              {key}
            </StyledOption>
          ))}
        </StyledSelect>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Sort By: </FilterLabel>
        <StyledSelect
          value={currentGalleryFilters.sort}
          onChange={({ target }) => onFiltersChange("sort", target.value)}
        >
          {Object.keys(GallerySortOptions).map((key) => (
            <StyledOption key={key} value={GallerySortOptions[key as keyof typeof GallerySortOptions]}>
              {key}
            </StyledOption>
          ))}
        </StyledSelect>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel>Window: </FilterLabel>
        <StyledSelect
          value={currentGalleryFilters.window}
          onChange={({ target }) => onFiltersChange("window", target.value)}
        >
          {Object.keys(GalleryWindowOptions).map((key) => (
            <StyledOption key={key} value={GalleryWindowOptions[key as keyof typeof GalleryWindowOptions]}>
              {key}
            </StyledOption>
          ))}
        </StyledSelect>
      </FilterGroup>
    </NavbarContainer>
  );
};

export default NavBar;
