import styled from 'styled-components';
import theme from '../root/theme';

export const DivArticle = styled.div`
  -webkit-box-shadow: 1px 5px 18px -4px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 5px 18px -4px rgba(0, 0, 0, 0.7);
  box-shadow: 1px 5px 18px -4px rgba(0, 0, 0, 0.7);

  padding: 5%;
`;

export const LinkNews = styled.a`
  text-decoration: none;
  border: none;
  color: ${theme.colors.black};

  i {
    font-weight: 400;
    font-size: 13px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  margin: 0;
  word-break: break-word;
  margin-bottom: 5px;
`;

export const SubTitle = styled.div`
  color: ${theme.colors.grey};
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  word-break: break-word;
`;
