import { useContext } from 'react';
import { MoreNewsWrapper } from './styles';
import NewsContext from '../../context/NewsContext';
import { fetchAPIFiltered, fetchAPI, FILTERS_NAME } from '../../utils/utils';

type MoreNewsType = {
  filterHighlight: number
};

function MoreNews(props: MoreNewsType) {
  const { filterHighlight } = props;
  const { pagination, updatePagination, moreNews } = useContext(NewsContext);

  const handleMoreNews = async () => {
    if (filterHighlight === 2 || filterHighlight === 3) {
      const data = await fetchAPIFiltered(FILTERS_NAME[filterHighlight], 10, pagination);
      moreNews(data.items);
      updatePagination('');
      return;
    }

    const data = await fetchAPI(10, pagination);
    moreNews(data.items);
    updatePagination('');
  };
  return (
    <MoreNewsWrapper>
      <button onClick={ handleMoreNews }>MoreNews</button>
    </MoreNewsWrapper>
  );
}

export default MoreNews;
