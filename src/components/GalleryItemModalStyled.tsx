import { styled } from "styled-components";

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

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #3c3742;
  border-radius: 4px;
  max-width: 80%;
  max-height: 80%;
  min-height: 80%;
  min-width: 60%;
  overflow-y: auto;

  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #b8add2 #191326; /* Firefox */

  &::-webkit-scrollbar {
    width: 10px; /* Set the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #191326; /* Background color of the track */
    border-radius: 5px; /* Rounded corners for the track */
  }

  &::-webkit-scrollbar-thumb {
    background: #b8add2; /* Background color of the thumb */
    border-radius: 5px; /* Rounded corners for the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Background color of the thumb on hover */
  }
`;

const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const ModalContent = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const ModalImage = styled.img`
  max-width: 80%;
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
  padding-bottom: 30px;
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

export {
  GroupIconsContainer,
  IconText,
  CloseIcon,
  IconContainer,
  CloseButton,
  ModalContainer,
  ModalDescription,
  ModalContent,
  ModalTitle,
  ModalImage,
  ModalHeaderContainer,
  ModalVideo,
  ModalWrapper,
};
