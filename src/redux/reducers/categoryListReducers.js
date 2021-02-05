import { produce } from 'immer';
import * as Constant from '../constants';

const ListCategory = {
  loading: true,
  categoryList: [],
  error: null,
};

const categoryListReducers = produce((draft, action) => {
  switch (action.type) {
    case Constant.CATEGORY_LIST_REQUEST:
      draft.loading = true;
      draft.categoryList = [];
      draft.error = null;
      return;

    case Constant.CATEGORY_LIST_SUCCESS:
      draft.loading = false;
      draft.categoryList = action.payload;
      draft.error = null;
      return;

    case Constant.CATEGORY_LIST_ERROR:
      draft.loading = false;
      draft.categoryList = [];
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, ListCategory);

export default categoryListReducers;
