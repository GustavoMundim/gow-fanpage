'use client';

import {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import * as S from './styles';
import gameWeapon from './weapons.json';
import character from './characters.json';
import SkeletonLoading from '@/components/organisms/SkeletonLoading/SkeletonLoading';
import { UseLoading } from '@/hooks/useLoading/useLoading';

const defaultWeapons = [
  'atenas.png',
  'bladeartemis.png',
  'bladechaos.png',
  'hammer.png',
  'olimpos.png',
  'zeus.png',
  'hades.png',
  'leviathan.png'
];

const defaultFranquias = [
  'gow1game.jpg',
  'gow2game.jpg',
  'gow3game.jpg',
  'gow.jpg',
  'gow4game.jpg'
];

type TabProps = 'Inicio' | 'Historia' | 'Armas' | 'Personagens' | 'Franquias';

export default function Home() {
  const [currentTab, setCurrentTab] = useState<TabProps>('Inicio');
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const muteContainer = useRef<HTMLAudioElement | null>(null);

  function toggleMute() {
    if (muteContainer.current) {
      if (isMute) {
        muteContainer.current.play();
      } else {
        muteContainer.current.pause();
      }
      setIsMute(!isMute);
    }
  }

  function changeTab(tab: TabProps) {
    setCurrentTab(tab);
  }

  function handleWeaponpage() {
    event?.preventDefault();
    setisModalOpen(false);
    changeTab('Armas');
  }

  setTimeout(() => {
    setisModalOpen(true);
  }, 500);
  return (
    <>
      <audio src="gow.m4a" autoPlay loop ref={muteContainer} />
      <S.Header>
        <S.DotMute onClick={toggleMute} $isMuted={isMute}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-volume-off"
          >
            {isMute ? (
              <>
                <path d="M16 9a5 5 0 0 1 .95 2.293" />
                <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
                <path d="m2 2 20 20" />
                <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
                <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
              </>
            ) : (
              <>
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                <path d="M16 9a5 5 0 0 1 0 6" />
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
              </>
            )}
          </svg>
        </S.DotMute>
        <S.Nav>
          <a
            onClick={(e) => {
              e.preventDefault();
              changeTab('Inicio');
            }}
          >
            <img src="logo.png" />
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              changeTab('Historia');
            }}
          >
            Historia
          </a>
          <a href="" onClick={handleWeaponpage}>
            Armas
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              changeTab('Personagens');
            }}
          >
            Personagens
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              changeTab('Franquias');
            }}
          >
            Franquias
          </a>
        </S.Nav>
      </S.Header>
      <S.Container>
        <S.Overlay $rgba="222, 222, 222, 0.5" />
        {currentTab === 'Inicio' && <Slider />}
        {currentTab === 'Armas' && <Weapons isModalOpen={isModalOpen} />}
        {currentTab === 'Personagens' && <Characters character={character} />}
        {currentTab === 'Historia' && <Modal id={0} isHistory />}
        {currentTab === 'Franquias' && <Franquias />}
      </S.Container>
    </>
  );
}
const Franquias = () => {
  return (
    <S.ContainerFranquia>
      <Tag>Franquia</Tag>
      <S.ContainerCardFranquia>
        <S.SlideTrack numItems={defaultFranquias.length}>
          <S.Slider>
            {defaultFranquias.map((franquia, index) => {
              const isSelected =
                index === Math.floor(defaultFranquias.length / 6);
              return (
                <S.CardFranquia key={index} $isSelect={isSelected}>
                  <img src={franquia} alt="alt-card" />
                  <S.Overlay
                    $rgba={isSelected ? '0, 0, 0, 0.5' : '0, 0, 0, 0.3'}
                  />
                </S.CardFranquia>
              );
            })}
            {defaultFranquias.map((franquia, index) => {
              const isSelected =
                index === Math.floor(defaultFranquias.length / 21);
              return (
                <S.CardFranquia key={index + defaultFranquias.length}>
                  <S.Overlay
                    $rgba={isSelected ? '0, 0, 0, 0.1' : '0, 0, 0, 0.9'}
                  />
                  <img src={franquia} alt="" />
                </S.CardFranquia>
              );
            })}
          </S.Slider>
        </S.SlideTrack>
      </S.ContainerCardFranquia>
    </S.ContainerFranquia>
  );
};

const godsType = [
  { tab: 'Todos', type: 'all' },
  {
    tab: 'Grega',
    type: 'greek'
  },
  {
    tab: 'Nórdica',
    type: 'norse'
  }
];

export const Characters = ({ character }) => {
  const charactersPerPage = 12;
  const [resetLoading, setResetLoading] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>('0');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectCharacter, setSelectCharacter] = useState<number | null>(null);
  const [isCharacterOpen, setisCharacterOpen] = useState<boolean>(false);
  const { isLoading } = UseLoading({ hasReset: resetLoading, time: 1200 });
  const [filterCharacter, setFilterCharacter] = useState<string>('all');

  function handleCharacter(id: number) {
    setSelectCharacter(id);
    setisCharacterOpen(true);
  }

  function handleTab(e: MouseEvent<HTMLDivElement>) {
    const id = e.currentTarget.id;
    setFilterCharacter(id);
    setResetLoading(true);
  }

  const characterChoices = character.map((item, index) => ({
    ...item,
    pageNumber: index
  }));

  const filteredCards = characterChoices.filter(
    (card) =>
      filterCharacter === 'all' ||
      card.type.toLowerCase().includes(filterCharacter.toLowerCase())
  );

  const startIndex = currentPage * charactersPerPage;
  const currentCards = filteredCards.slice(
    startIndex,
    startIndex + charactersPerPage
  );

  const VisibleCharacter =
    isCharacterOpen && isLoading ? Array.from({ length: 12 }) : currentCards;

  useEffect(() => {
    const time = setTimeout(() => {
      setResetLoading(false);
    }, 1200);
    return () => clearTimeout(time);
  }, [resetLoading]);

  function handleSelect(event: MouseEvent<HTMLDivElement>) {
    const id = event.currentTarget.id;
    if (id === selectOption) return;

    setSelectOption(id);
    setResetLoading(true);
    setCurrentPage(Number(id));
  }

  return (
    <>
      {isCharacterOpen ? (
        <Modal id={selectCharacter!} setisCharacterOpen={setisCharacterOpen} />
      ) : (
        <div>
          <S.SectionCardCharacter>
            <S.MainCharacter>
              <S.HeaderCharacter>
                {godsType.map((label, index) => {
                  return (
                    <S.ButtonCharacter
                      $isSelect={label.type === filterCharacter}
                      key={index}
                      id={label.type}
                      onClick={handleTab}
                    >
                      {label.tab}
                    </S.ButtonCharacter>
                  );
                })}
              </S.HeaderCharacter>
              {VisibleCharacter.map((character, index) => (
                <S.CardCharacter
                  key={index}
                  $isLoading={isLoading}
                  onClick={() => handleCharacter(character.pageNumber)}
                >
                  {isLoading ? (
                    <SkeletonLoading />
                  ) : (
                    <img src={character.image} alt="" />
                  )}
                </S.CardCharacter>
              ))}
            </S.MainCharacter>
          </S.SectionCardCharacter>

          <S.PageSelect>
            {Array.from(
              {
                length: Math.ceil(filteredCards.length / charactersPerPage)
              },
              (_, index) => (
                <S.CardPageSelect
                  key={index}
                  id={String(index)}
                  isSelect={selectOption === String(index)}
                  onClick={handleSelect}
                >
                  <p>{index + 1}</p>
                </S.CardPageSelect>
              )
            )}
          </S.PageSelect>
        </div>
      )}
    </>
  );
};

export const Weapons = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const [currentOption, setOption] = useState<number>(3);

  function toggleClick(direction: string) {
    setOption((prev) => {
      if (direction === 'left') {
        return (prev - 1 + gameWeapon.length) % gameWeapon.length;
      } else {
        return (prev + 1) % gameWeapon.length;
      }
    });
  }
  return (
    <div style={{ display: 'flex', gap: 30 }}>
      <S.Dot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          onClick={() => toggleClick('left')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </S.Dot>
      <S.Modal $isModalOpen={isModalOpen}>
        <S.SectionCardModal>
          <S.CardModal>
            <S.ImageCard>
              <img src={gameWeapon[currentOption].image} alt="" />
            </S.ImageCard>
            <S.Tag>
              <h1>{gameWeapon[currentOption].descriptionTag[0].title}</h1>
            </S.Tag>
            <S.Description>
              <S.ContentDescription>
                <S.Overlay $rgba="0, 0, 0, 0.8" />
              </S.ContentDescription>
              <S.DescriptionTag>
                {gameWeapon[currentOption].descriptionTag[0].description.map(
                  (label, index) => {
                    return (
                      <p key={index}>
                        {label.title} {label.power}
                      </p>
                    );
                  }
                )}
              </S.DescriptionTag>
            </S.Description>
          </S.CardModal>
        </S.SectionCardModal>
        <S.DescriptionSection src={gameWeapon[currentOption].background}>
          <S.Overlay $rgba="222, 222, 222, 0.7" />
          <Tag>Historia</Tag>
          <div style={{ position: 'relative' }}>
            <p>{gameWeapon[currentOption].history}</p>
          </div>
          <Tag hasMargin>Poderes</Tag>
          <S.Power>
            {gameWeapon[currentOption].power.map((label, index) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    gap: 40,
                    width: '100%',
                    alignItems: 'center'
                  }}
                  key={index}
                >
                  <span></span>
                  <p>{label.name}</p>
                </div>
              );
            })}
          </S.Power>
        </S.DescriptionSection>
      </S.Modal>
      <S.Dot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => toggleClick('right')}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </S.Dot>
    </div>
  );
};

export const Tag = ({
  children,
  hasMargin = false
}: {
  children: ReactNode;
  hasMargin?: boolean;
}) => {
  return <S.TagHistoria $hasMargin={hasMargin}>{children}</S.TagHistoria>;
};

interface SliderWeaponsProps {
  data: string[];
}

const Slider = () => {
  return (
    <S.Slider>
      <S.SlideTrack numItems={defaultWeapons.length}>
        <SliderWeapons data={defaultWeapons} />
        <SliderWeapons data={defaultWeapons} />
      </S.SlideTrack>
    </S.Slider>
  );
};

const SliderWeapons = ({ data }: SliderWeaponsProps) => (
  <>
    {data.map((label, index) => (
      <S.Card key={index}>
        <img src={label} alt={`Weapon ${index}`} />
      </S.Card>
    ))}
  </>
);

type ModalProps = {
  id: number;
  setisCharacterOpen: Dispatch<SetStateAction<boolean>>;
  isHistory?: boolean;
};

export const Modal = ({
  id,
  setisCharacterOpen,
  isHistory = false
}: ModalProps) => {
  return (
    <>
      {!isHistory && (
        <S.Dot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            onClick={() => setisCharacterOpen(false)}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </S.Dot>
      )}
      <S.Modal $isModalOpen>
        <S.SectionCardModal>
          <S.CardModal>
            <img
              src={isHistory ? 'kratoscardh.jpg' : character[id].image}
              alt=""
            />
          </S.CardModal>
        </S.SectionCardModal>
        <S.DescriptionSection src={isHistory ? 'kratoshistory.jpg' : 'gow.jpg'}>
          <S.Overlay $rgba="222, 222, 222, 0.7" />
          <Tag>{character[id].name}</Tag>
          <div style={{ position: 'relative' }}>
            <p>{character[id].description}</p>
          </div>
        </S.DescriptionSection>
      </S.Modal>
    </>
  );
};
