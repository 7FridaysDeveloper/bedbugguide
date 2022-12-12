import React, {useEffect, useState} from "react";
import Posts from "../posts";
import {Helmet} from "react-helmet";
import {navigate} from "gatsby";
import parse from "html-react-parser";

const restApiToGraphql = (post) => {
    const replaceLink = (item) => ({...item, uri: `/${item.taxonomy}/${item.slug}`});
    post.categories = Array.isArray(post?.categories) ? post?.categories : [];
    post.tags = Array.isArray(post?.tags) ? post?.tags : [];
    return {
        excerpt: post.excerpt,
        uri: post.url?.replace(`${process.env.GATSBY_URL}`, ''),
        date: post.date,
        databaseId: post.id,
        title: post.title,
        categories: {
            nodes: post?.categories?.map(replaceLink),
        },
        tags: {
            nodes: post?.tags?.map(replaceLink),
        },
        featuredImage: {
            node: {
                localFile: post.attachment,
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
        fetch(`${process.env.GATSBY_API_URL}/search/?page=${paginationSettings.page}&search=${search.replace('?s=', '')}&_embed=true&status=published`)
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

    const titleSearch = loading === false && posts.length === 0 ? 'No Results for' : 'Search Results for';
    return (
        <div>
            <Helmet>
                {<title>You searched for  a {paginationSettings.page > 1 ? `Page ${paginationSettings.page} of ${paginationSettings.totalPages}` : ''} - {seo}</title>}
            </Helmet>
            <div className="container">
                <h2 className="page_title_archive">{titleSearch}: {parse(search.replace('?s=', ''))} </h2>
            </div>
            <Posts posts={posts} loading={loading} pageContext={paginationSettings} changePagination={changePage}/>
        </div>
    )
}