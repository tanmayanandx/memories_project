import * as api from '../api'

//api.fetchPosts

//Action Creators- functions that return actions
//Redux tank allows to specify additional arrow function
export const getPosts = () => async (disaptch) => {
    
    try {
        const { data } = await api.fetchPosts();
        disaptch ({ type: 'FETCH_ALL', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
    
    
    
    //const action = { type: 'FETCH_ALL', payload: [] }

    //disaptch (action);
}