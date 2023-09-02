import { useState } from "react";
import { styled } from "styled-components";

interface ImageProps {
  url: string;
  height: string;
  width: string;
}

interface CustomImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  isLoaded: boolean;
}

const ImageWrapper = styled.div<{ width: string; height: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const ImageElement = styled.img<CustomImgProps>`
  width: 100%;
  height: auto;
  transition: filter 0.5s ease-in-out;
  filter: ${(props) => (props.isLoaded ? "none" : "blur(8px)")};
`;

const Image: React.FC<ImageProps> = ({ url, height, width }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageWrapper width={width} height={height}>
      <ImageElement src={url} loading="lazy" width="100%" isLoaded={isLoaded} onLoad={() => setIsLoaded(true)} />
    </ImageWrapper>
  );
};

export default Image;
