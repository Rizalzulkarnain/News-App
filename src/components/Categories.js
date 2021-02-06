import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Article from './Article';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../redux/actions/categoryListAction';

import { DivContainer, CustomInput, CardLayout } from '../styles';

const Categories = () => {
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryList);
  const { loading, error, categoryList } = categories;

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  const Searching = (keyword) => (article) =>
    article.name.toLowerCase().includes(keyword) || !keyword;

  return (
    <DivContainer>
      <CustomInput>
        <input
          type="search"
          placeholder="Cari Kategori Berita"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.toLowerCase())}
        />
      </CustomInput>
      <CardLayout>
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000} //3 secs
          />
        ) : error ? (
          <>
            <>{error}</>
          </>
        ) : (
          categoryList
            .filter(Searching(keyword))
            .map((category) =>
              category.templates.map((template) =>
                template.sections.map((section) =>
                  section.articles.map((article, index) => (
                    <Article key={index} article={article} />
                  ))
                )
              )
            )
        )}
      </CardLayout>
    </DivContainer>
  );
};

export default Categories;
