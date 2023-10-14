import { Heart } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { NewsCardStyled, FavoritWrapper, ResumeIntro } from './style';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { NewsType } from '../../types';

const BASE_URL_IMAGES = 'https://agenciadenoticias.ibge.gov.br/';

type NewsCardProps = {
  newsItem: NewsType;
};

function NewsCard(props: NewsCardProps) {
  const { newsItem } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const differenceInDays = (date: string) => {
    const partes = date.split(' ');
    const dataPartes = partes[0].split('/');
    const novaData = `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`;
    const dataFornecida = novaData;

    const dataAlvo = new Date(dataFornecida);
    const dataAtual = new Date();
    const diferencaEmMilissegundos = Math.abs(dataAlvo.getTime() - dataAtual.getTime());
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    return diferencaEmDias;
  };

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

  const daysBefore = differenceInDays(newsItem.data_publicacao);

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
        <ResumeIntro>{newsItem.introducao}</ResumeIntro>
        <ReadMoreButton
          href={ newsItem.link }
        >
          Leia a notícia aqui
        </ReadMoreButton>
      </div>
      <FavoritWrapper>
        <p>
          {daysBefore}
          {' '}
          dias atrás
        </p>
        {(isFavorite)
          ? (<Heart
              onClick={ handleFavorite }
              fill="red"
              weight="fill"
              size={ 24 }
          />)
          : (<Heart
              onClick={ handleFavorite }
              size={ 24 }
          />)}

      </FavoritWrapper>
    </NewsCardStyled>
  );
}

export default NewsCard;
