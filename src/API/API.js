import Http from './Http';

export const categoryList = () => Http.get('/api/v1/categories');
