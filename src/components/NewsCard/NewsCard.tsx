import { Heart } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { NewsCardStyled, FavoritWrapper } from './style';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { NewsType } from '../../types';

const BASE_URL_IMAGES = 'https://agenciadenoticias.ibge.gov.br/';

type NewsCardProps = {
  newsItem: NewsType;
};

function NewsCard(props: NewsCardProps) {
  const { newsItem } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoritesNews') as string) || [];

    const isFavoriteNews = favorites
      .find((favorite: NewsType) => favorite.id === newsItem.id);

    if (isFavoriteNews) {
      const newFavorites = favorites
        .filter((favorite: NewsType) => favorite.id !== newsItem.id);

      localStorage.setItem('favoritesNews', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(newsItem);
      localStorage.setItem('favoritesNews', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoritesNews') as string) || [];

    const isFavoriteNews = favorites
      .find((favorite: NewsType) => favorite.id === newsItem.id);

    if (isFavoriteNews) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [newsItem.id]);

  return (
    <NewsCardStyled>
      <div>
        <img
          src={ `${BASE_URL_IMAGES}${JSON
            .parse(newsItem.imagens as string).image_intro}` }
          alt=""
        />
      </div>
      <div>
        <h3>{newsItem.titulo}</h3>
        <p>{newsItem.introducao}</p>
        <ReadMoreButton
          href={ newsItem.link }
        >
          Leia a notícia aqui
        </ReadMoreButton>
      </div>
      <FavoritWrapper>
        {(isFavorite)
          ? (<Heart
              onClick={ handleFavorite }
              fill="red"
              weight="fill"
              size={ 32 }
          />)
          : (<Heart
              onClick={ handleFavorite }
              size={ 32 }
          />)}

      </FavoritWrapper>
    </NewsCardStyled>
  );
}

export default NewsCard;
