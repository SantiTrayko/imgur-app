import { FaThumbsUp, FaThumbsDown, FaFire } from "react-icons/fa";
import {
  ModalWrapper,
  ModalContainer,
  ModalContent,
  CloseButton,
  CloseIcon,
  ModalHeaderContainer,
  ModalTitle,
  ModalVideo,
  ModalImage,
  GroupIconsContainer,
  IconContainer,
  IconText,
  ModalDescription,
} from "./GalleryItemModalStyled";

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
      <ModalContainer>
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
      </ModalContainer>
    </ModalWrapper>
  );
};

export default GalleryItemModal;
