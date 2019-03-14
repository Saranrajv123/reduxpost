import jsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPosts = async () => {
    const response = await jsonPlaceHolder.get('/posts')
    return {
        type: 'FETCH_POST',
        payload: response,
    };
}