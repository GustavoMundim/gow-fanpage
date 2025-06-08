import styled, { css, keyframes } from 'styled-components';

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const animationMuted = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const DotMute = styled.div<{ $isMuted: boolean }>`
  width: 50px;
  margin-right: 20px;
  margin-top: 20px;
  position: absolute;
  left: 0;
  margin-left: 30px;
  height: 50px;
  display: flex;
  ${(props) =>
    props.$isMuted &&
    css`
      animation: ${animationMuted} 5s infinite;
      border: 1px solid #6a6462;
    `}
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(to bottom, #0b0e13 20%, #304c6b, #0c0e16);
  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 130px;
  position: absolute;
  margin-top: 10px;
  display: flex;
  z-index: 2000;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media screen and (max-width: 760px) {
    margin-top: 0;
  }

  @media screen and (max-width: 1200px) {
    :nth-child(1) {
      top: 100%;
    }
  }
`;

export const SectionCardModal = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const BannerImg = styled.div`
  width: 100%;
  height: 200px;
`;

export const CardModal = styled.div`
  width: 80%;
  height: 500px;
  border: 1px solid #fff;
  overflow: hidden;
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media screen and (max-width: 1280px) {
    width: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Power = styled.div`
  width: 100%;
  height: 250px;
  row-gap: 10px;
  flex-direction: column;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 80%;
    border: 1px solid #fff;
    background: linear-gradient(to right, #0b0e13 20%, #304c6b, #0c0e16);
  }
`;

export const DescriptionSection = styled.div<{ src: string }>`
  width: 100%;
  border: 1px solid grey;
  height: 650px;
  overflow-y: auto;
  padding: 10px;
  margin-top: 15px;
  overflow: hidden;
  position: relative;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;

  p {
    text-shadow: 0px 1px 2px green;
    color: white;
    font-size: 22px;
    font-weight: 800;
    z-index: 20;
  }
`;

export const ContentDescription = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  background-image: url('cardlogo.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DescriptionTag = styled.div`
  width: 100%;
  align-items: center;
  height: 40%;
  border: 1px solid #fff;
  font-size: 14px;
  display: flex;
  color: #fff;
  font-weight: 700;
  gap: 10px;
  justify-content: center;
`;

export const ContainerFranquia = styled.div`
  width: 90%;
  height: 300px;
  margin-bottom: 10px;
  min-height: 900px;
  flex-direction: column;
  margin-top: 160px;
  border-radius: 16px;
  display: flex;
  margin-bottom: 30px;
  padding: 30px;
  z-index: 20;
  background: rgba(255, 255, 255, 0.3);
  box-shadow:
    0px 10px 4px 0px rgba(255, 255, 255, 0.15) inset,
    0px 6px 4px 0px rgba(0, 0, 0, 0.25),
    0px -10px 4px 0px rgba(50, 50, 50, 0.25) inset;
`;

export const CardFranquia = styled.div<{
  $isCardMove?: number;
  $isSelect?: boolean;
  numItems?: number;
}>`
  width: 400px;
  height: 600px;
  flex-shrink: 0;
  transform: scale(0.9);
  ${(props) =>
    props.$isSelect &&
    css`
      z-index: 20;
    `}
  border: 1px solid ${(props) => props.$isSelect && 'grey'};
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  box-shadow:
    0px 10px 4px 0px rgba(255, 255, 255, 0.15) inset,
    0px 6px 4px 0px rgba(0, 0, 0, 0.25),
    0px -10px 4px 0px rgba(50, 50, 50, 0.25) inset;
  animation: ${slideAnimation} 10s linear infinite;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerCardFranquia = styled.div`
  width: 100%;
  display: flex;
  background-image: url('gowbg.png');
  box-shadow:
    0px 10px 4px 0px rgba(255, 255, 255, 0.15) inset,
    0px 6px 4px 0px rgba(0, 0, 0, 0.25),
    0px -10px 4px 0px rgba(50, 50, 50, 0.25) inset;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  overflow: hidden;
  height: 790px;
  border-radius: 12px;
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Tag = styled.div`
  width: 100%;
  height: 50px;
  letter-spacing: 1px;
  text-shadow: 0px 0px 7px blue;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid white;

  h1 {
    font-size: 18px;
    color: #fff;
    font-weight: 800;
  }
`;

export const Modal = styled.div<{
  $isModalOpen: boolean;
  $backgroundModal?: string;
}>`
  width: 1500px;
  max-width: 1500px;
  min-width: 800px;
  height: 700px;
  user-select: none;
  display: flex;
  position: relative;
  padding: 10px;
  overflow: hidden;
  top: 5%;
  transition: all 1s ease;
  transform: translateY(${(props) => (props.$isModalOpen ? 0 : 20)}%);
  opacity: ${(props) => (props.$isModalOpen ? 1 : 0)};
  margin-top: 100px;
  border-radius: 16px;
  z-index: 2;
  background: linear-gradient(to right, #0b0e13 20%, #304c6b, #0c0e16);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 1650px) {
    width: 1200px;
  }

  @media screen and (max-width: 1400px) {
    width: 1000px;
  }
`;

export const Nav = styled.div`
  box-shadow:
    rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  width: 70%;
  user-select: none;
  display: flex;
  border-radius: 8px;
  align-items: center;
  padding: 20px;
  gap: 10px;
  justify-content: space-between;
  height: 100%;
  background: linear-gradient(to right, #0b0e13 20%, #304c6b, #0c0e16);

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    border-radius: 0;
    padding: 0;
  }

  a {
    color: white;
    font-weight: 600;
    font-size: 19px;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 200px;
    height: 120px;
  }
  a img {
    transition: all 0.5s ease;
    cursor: pointer;
  }

  a img:hover {
    transform: scale(0.8);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('gow.jpg');
`;

export const CardPageSelect = styled.div<{ isSelect?: boolean }>`
  width: 50px;
  border-radius: 8px;
  border: ${(props) => props.isSelect && css`1px solid #fff`};
  transform: scale(${(props) => props.isSelect && 1.3});
  height: 100%;
  background: linear-gradient(to left, #0b0e13 0%, #304c6b, #0c0e16);
  z-index: 20;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:hover {
    border: 1px solid #fff;
  }

  p {
    color: #fff;
    font-size: 25px;
    font-weight: 800;
    text-align: center;
  }
`;

export const PageSelect = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div<{ $rgba: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(${(props) => props.$rgba});
  top: 0;
  left: 0;
`;

export const Card = styled.div`
  width: 400px;
  height: 300px;
  box-shadow:
    rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  flex-shrink: 0;
  position: relative;
  border: 1px solid #0b0e13;
  transition: filter 0.5s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export const SlideCardFranquia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  mask-image: linear-gradient(to right, transparent, #000, transparent);

  overflow: hidden;
  height: 700px;
  z-index: 20;

  &:hover {
    animation-play-state: paused !important;
  }
`;

export const SlideTrack = styled.div<{
  numItems: number;
  $slideTime?: number;
  $widthCard?: number;
}>`
  display: flex;
  width: calc(
    ${({ $widthCard = 400, numItems }) => `${$widthCard * numItems * 2}px`}
  );
  animation: ${slideAnimation} ${({ $slideTime = 10 }) => `${$slideTime}s`}
    linear infinite;
`;

export const Slider = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  height: 800px;
  z-index: 20;
  mask-image: linear-gradient(to right, transparent, #000, transparent);

  &:hover {
    animation-play-state: paused !important;
  }
`;

export const Dot = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;

  svg {
    cursor: pointer;
    color: #fff;
    background: linear-gradient(to right, #0b0e13 20%, #304c6b, #0c0e16);
    border-radius: 80%;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(0.9);
      border: 1px solid red;
    }
  }
`;

export const TagHistoria = styled.div<{ $hasMargin: boolean }>`
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  margin-bottom: 30px;
  margin-top: ${(props) => props.$hasMargin && 50}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 40px;
  letter-spacing: 5px;
  height: 70px;
`;

export const MainCharacter = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const HeaderCharacter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  border-radius: 4px;
  margin-top: 30px;
  gap: 20px;
  display: flex;
`;

export const ButtonCharacter = styled.div<{ $isSelect: boolean }>`
  color: white;
  background: linear-gradient(to right, #0b0e13 50%, #304c6b, #0c0e16);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transform: scale(${(props) => props.$isSelect && 1.3});
  text-shadow: 0px 1px 1px #879fbb;
  ${(props) =>
    props.$isSelect &&
    css`
      border: 1px solid white;
    `};
  height: 100%;
  width: 100px;
  cursor: pointer;
  transition: all 0.5s ease;
  font-weight: 800;

  &:hover {
    border: 1px solid white;
    transform: scale(0.9);
  }
`;

export const SectionCardCharacter = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 70px;
  display: flex;
  transition: all 0.5s ease;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const CardCharacter = styled.div<{ $isLoading: boolean }>`
  width: 200px;
  height: 280px;
  flex-shrink: 0;
  ${(props) =>
    !props.$isLoading &&
    css`
      border: 1px solid #211b18;
    `};
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 30;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;

  ${(props) =>
    !props.$isLoading &&
    css`
      &:hover {
        transform: scale(0.9);
        border: 1px solid #fff;
      }
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
