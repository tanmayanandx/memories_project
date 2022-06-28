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

export const createPost = (post) => async (disaptch) => {
    try {
        const { data } = await api.createPost(post);
        disaptch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (disaptch) => {
    try {
        const {data} = await api.updatePost(id, post);

        disaptch({type: 'UPADTE', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}