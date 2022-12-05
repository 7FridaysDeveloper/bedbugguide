import { useState, useLayoutEffect} from 'react';

const usePopularPosts = (limit = 4) => {
    const [popularPost, setPopularPosts] = useState([]);

    const getSessionPopularPosts = () => {
        const posts =  sessionStorage.getItem('usePopularPosts');
        if(posts !== null) return JSON.parse(posts);
        return null;
    }

    const setSessionPopularPosts = (posts) => {
        sessionStorage.setItem('usePopularPosts', JSON.stringify(posts));
        setPopularPosts(posts);
    }

    useLayoutEffect(() => {
        const sessionPopularPost = getSessionPopularPosts();
        if(sessionPopularPost === null) {
            fetch(process.env.GATSBY_API_URL+'/wp-json/wp/v2/popular_post')
                .then(res => res.json())
                .then(posts => posts.map(post => {
                    return {
                        title: post.title?.rendered,
                        cat: post?.cat,
                        id: post.id,
                        uri: post.uri,
                    }
                })).then(posts => {
                const newPosts = posts.map((post) => {
                    return {
                        ...post,
                        categories: Array.isArray(post.cat) ? post.cat[0] : [],
                    }
                })

                setSessionPopularPosts(newPosts);
            })
        } else {
            setPopularPosts(sessionPopularPost || []);
        }


    }, [])
    return popularPost.slice(0, limit);
}
export default usePopularPosts;
