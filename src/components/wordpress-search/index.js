import React, {useEffect, useState} from "react";
import Posts from "../posts";
import {Helmet} from "react-helmet";
import {navigate} from "gatsby";

const restApiToGraphql = (post) => {
    const embed = post?._embedded;

    const replaceLink = (item) => ({...item, uri: item.link?.replace(`${process.env.GATSBY_URL}`, '')});

    let categories = embed['wp:term']?.filter(item => item[0]?.taxonomy === 'category');
    let tag = embed['wp:term']?.filter(item => item[0]?.taxonomy === 'post_tag');
    categories = Array.isArray(categories[0]) ? categories[0].map(replaceLink) : [];
    tag = Array.isArray(tag[0]) ? tag[0].map(replaceLink) : [];
    let image = embed['wp:featuredmedia'] && embed['wp:featuredmedia'][0]?.media_details?.sizes?.medium?.source_url
    if (image === undefined && embed['wp:featuredmedia']) {
        image = embed['wp:featuredmedia'][0]?.media_details?.sizes?.full?.source_url
    }
    return {
        excerpt: post.excerpt?.rendered,
        uri: post.link.replace(`${process.env.GATSBY_URL}`, ''),
        date: post.date,
        databaseId: post.id,
        title: post.title?.rendered,
        categories: {
            nodes: categories,
        },
        tags: {
            nodes: tag,
        },
        featuredImage: {
            node: {
                localFile: image,
            }
        }
    }
}
export default function WordpressSearch({search, path, seo}) {
    const [loading, setLoading] = useState(true);

    const page = Number(path.replace(/\D+/g, '')) || 1;
    const [paginationSettings, setPaginationSettings] = useState({
        page: page,
        totalPages: 1,
        postsPerPage: 10,
    })
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.GATSBY_API_URL}/posts?search=${search.replace('?s=', '')}&_embed=true&page=${paginationSettings.page}`)
            .then(res => {
                setPaginationSettings({...paginationSettings, totalPages: Number(res.headers.get('x-wp-totalpages'))})
                return res.json()
            })
            .then(data => {
                setPosts(data.map(restApiToGraphql))
            }).finally(() => setLoading(false))
    }, [search]);

    useEffect(() => {
        setPaginationSettings({...paginationSettings, page: page})
    }, [path]);

    const changePage = async (page) => {
        const routeTo = page > 1 ? `/page/${page}/${search}` : '/' + search;
        await navigate(routeTo);
    }
    return (
        <>
            <Helmet>
                {<title>You searched for  a {paginationSettings.page > 1 ? `Page ${paginationSettings.page} of ${paginationSettings.totalPages}` : ''} - {seo}</title>}
            </Helmet>
            <div className="container">
                <h2 className="page_title_archive">Search Results for: {search.replace('?s=', '')} </h2>
            </div>
            <Posts posts={posts} loading={loading} pageContext={paginationSettings} changePagination={changePage}/>
        </>
    )
}