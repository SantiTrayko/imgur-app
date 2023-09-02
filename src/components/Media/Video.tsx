import { useState } from "react";
import styled from "styled-components";

interface VideoProps {
  url: string;
}

interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  isLoaded: boolean;
  width: string;
}

const VideoWrapper = styled.div`
  height: 233px;
  display: flex;
  flex-wrap: wrap;
`;

const VideoElement = styled.video<CustomVideoProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: auto;
  transition: filter 0.5s ease-in-out;
  filter: ${(props) => (props.isLoaded ? "none" : "blur(8px)")};
`;

const Video: React.FC<VideoProps> = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <VideoWrapper>
      <VideoElement
        draggable="false"
        loop
        playsInline
        muted
        autoPlay
        src={url}
        isLoaded={isLoaded}
        onLoadedData={() => setIsLoaded(true)}
        width="300px"
      />
    </VideoWrapper>
  );
};

export default Video;
