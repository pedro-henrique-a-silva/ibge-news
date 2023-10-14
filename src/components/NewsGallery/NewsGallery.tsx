import { NewsType } from '../../types';
import { NewsGalleryWrapper } from './style';
import NewsCard from '../NewsCard/NewsCard';

type NewsGalleryProps = {
  news: NewsType[];

};
function NewsGallery(props: NewsGalleryProps) {
  const { news } = props;
  return (
    <NewsGalleryWrapper id="news-gallery">
      {news.map((newsItem) => (
        <NewsCard newsItem={ newsItem } key={ newsItem.id } />
      ))}
    </NewsGalleryWrapper>
  );
}

export default NewsGallery;
