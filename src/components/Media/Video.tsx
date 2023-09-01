import styled from "styled-components";

interface VideoProps {
  url: string;
  title: string;
}

const VideoWrapper = styled.div`
  height: 233px;
  display: flex;
  flex-wrap: wrap;
`;

const Video: React.FC<VideoProps> = ({ url, title }) => {
  return (
    <VideoWrapper>
      <video width={300} autoPlay draggable="false" loop playsInline muted>
        <source src={url} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </VideoWrapper>
  );
};

export default Video;
