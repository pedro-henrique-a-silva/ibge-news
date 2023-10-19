import { NewsType } from '../../types';
import { HighlightNewsWrapper, ReadMoreWrapper } from './style';
import ReadMoreButton from '../ReadMoreButton/ReadMoreButton';
import { differenceInDays, BASE_URL_IMAGES } from '../../utils/utils';

type HighlightNewsProps = {
  highlightNews: NewsType;
};

function HighlightNews(props: HighlightNewsProps) {
  const { highlightNews } = props;

  const daysBefore = differenceInDays(highlightNews.data_publicacao);
  return (
    <HighlightNewsWrapper id="highlight-news">
      <div>
        <img
          src={ `${BASE_URL_IMAGES}${JSON
            .parse(highlightNews.imagens as string).image_intro}` }
          alt=""
        />
      </div>
      <div>
        <h3>{highlightNews.titulo}</h3>
        <p>{highlightNews.introducao}</p>
        <ReadMoreWrapper>
          <p>
            {(daysBefore === 0)
              ? 'menos de 1 dia atrás'
              : `${daysBefore} dias atrás`}
          </p>
          <ReadMoreButton
            href={ highlightNews.link }
          >
            Leia a notícia aqui
          </ReadMoreButton>
        </ReadMoreWrapper>
      </div>
    </HighlightNewsWrapper>
  );
}

export default HighlightNews;
