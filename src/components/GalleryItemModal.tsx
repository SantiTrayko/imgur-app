import styled from "styled-components";
import { FaThumbsUp, FaThumbsDown, FaFire } from "react-icons/fa";

const ModalWrapper = styled.div`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const ModalContent = styled.div`
  background-color: #3c3742;
  padding: 30px;
  border-radius: 4px;
  max-width: 80%;
  max-height: 80%;
  min-height: 80%;
  min-width: 50%;
  overflow: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ModalVideo = styled.video`
  max-width: 100%;
  width: 100%;
  max-height: 80vh;
  height: auto;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const ModalDescription = styled.p`
  font-size: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const GroupIconsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const IconText = styled.span`
  margin-left: 5px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaType: string;
  mediaUrl: string;
  title: string;
  description?: string | null;
  ups: number;
  downs: number;
  score: number;
}

const GalleryItemModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  mediaUrl,
  mediaType,
  title,
  description,
  ups,
  downs,
  score,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 1 0-1.41 1.41L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89a.996.996 0 0 0 0-1.41z" />
          </CloseIcon>
        </CloseButton>
        <ModalHeaderContainer>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeaderContainer>
        {mediaType.includes("video") ? (
          <ModalVideo controls autoPlay>
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </ModalVideo>
        ) : (
          <ModalImage src={mediaUrl} alt={title} />
        )}
        <GroupIconsContainer>
          <IconContainer>
            <FaThumbsUp size={20} color="#00cc00" />
            <IconText>{ups}</IconText>
          </IconContainer>
          <IconContainer>
            <FaThumbsDown size={20} color="#cc0000" />
            <IconText>{downs}</IconText>
          </IconContainer>
          <IconContainer>
            <FaFire size={20} color="#ff9900" />
            <IconText>{score}</IconText>
          </IconContainer>
        </GroupIconsContainer>
        <ModalDescription>{description}</ModalDescription>
      </ModalContent>
    </ModalWrapper>
  );
};

export default GalleryItemModal;
