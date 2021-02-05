import * as Constant from '../constants';
import * as API from '../../API/API';

export const getCategoryList = () => async (dispatch) => {
  try {
    dispatch({
      type: Constant.CATEGORY_LIST_REQUEST,
    });

    const { data } = await API.categoryList();
    dispatch({
      type: Constant.CATEGORY_LIST_SUCCESS,
      payload: data.result.categories,
    });
  } catch (error) {
    dispatch({
      type: Constant.CATEGORY_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
