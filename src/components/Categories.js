import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Article from './Article';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../redux/actions/categoryListAction';

import { DivContainer, CustomInput, CardLayout } from '../styles';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryList);
  const { loading, error, categoryList } = categories;

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  return (
    <DivContainer>
      <CustomInput>
        <input type="text" />
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
          categoryList.map((category) =>
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
