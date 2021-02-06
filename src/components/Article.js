import PropTypes from 'prop-types';

import { DivArticle, LinkNews, Title, SubTitle } from '../styles';

const Article = ({ article }) => {
  return (
    <>
      {!article.title || !article.publisher || !article.categoryName ? null : (
        <DivArticle>
          <LinkNews href={article.url.url} target="_blank" rel="noreferrer">
            <>
              <SubTitle>
                Kategori Berita: <i>{article.categoryName}</i>
              </SubTitle>
              <Title>{article.title}</Title>
              <SubTitle>
                <i>{article.publisher}</i>
              </SubTitle>
              <i>Read More...</i>
            </>
          </LinkNews>
        </DivArticle>
      )}
    </>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
