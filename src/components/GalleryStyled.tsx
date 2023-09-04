import { styled } from "styled-components";

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
    transform: scale(1.05); 
    opacity: 0.7;
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

export { LoadingOverlay, GalleryItem, GalleryContainer, GalleryWrapper };