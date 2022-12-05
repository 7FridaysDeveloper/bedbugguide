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
            fetch(process.env.GATSBY_API_URL+'/posts?_embed=wp:term')
                .then(res => res.json())
                .then(posts => posts.map(post => {
                    return {
                        title: post.title?.rendered,
                        cat: post?.['_embedded']['wp:term'],
                        id: post.id,
                        uri: '/'+post.slug,
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
