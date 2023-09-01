import { styled } from "styled-components";

interface ImageProps {
  url: string;
  title: string;
  height: string;
  width: string;
}

const ImageWrapper = styled.div<{ width: string; height: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image: React.FC<ImageProps> = ({ url, title, height, width }) => {
  return (
    <ImageWrapper width={width} height={height}>
      <img src={url} alt="" loading="lazy" width="100%" />
    </ImageWrapper>
  );
};

export default Image;
