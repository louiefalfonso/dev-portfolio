import React, { useState } from 'react'
import { Lightbox } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import Link from 'next/link';

const PostPage = ({ post, prevPost, nextPost }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="keywords" content={post.keywords} />
            </Head>

            <main>
                <div className="section-xs">
                    <div className="container-fluid text-center">
                        <h1 className="display-1 fw-medium mb-0">{post.title}</h1>
                    </div>
                </div>

                {/* Blog Post Info */}
                <div className="section-xs pt-0">
                    <div className="container-fluid">
                        <div className="row g-0 g-lg-5 align-items-end">
                            <div className="col-12 col-lg-6 order-lg-1 col-xl-3">
                                <div className="styled-box">
                                    <h5>Category:</h5>
                                    <a href="javascript:;">{post.category}</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 order-lg-3 col-xl-3">
                                <div className="styled-box style-2">
                                    <h5>Tags:</h5>
                                    <ul className="list-inline-sm">
                                        {post.tags.map((item, index) => (
                                            <li key={index}>
                                                <a href="javascript:;">#{item.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 order-lg-2 col-xl-3">
                                <div className="styled-box">
                                    <h5>Posted by:</h5>
                                    <p>{post.postedBy}</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 order-lg-4 col-xl-3">
                                <div className="styled-box style-2">
                                    <h5>Posted on:</h5>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>{/* end row */}
                    </div>{/* end container-fluid */}
                </div>
                {/* end Blog Post Info */}

                {/* Post text */}
                <div className="section-xs pt-0">
                    <div className="container-fluid">
                        <div className="fs-3" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>{/* end container-fluid */}
                </div>
                {/* end Post text */}

                {/* Post Media */}
                <div className="section-xs pt-0">
                    <div className="container-fluid">
                        <div className="row custom-spacing">
                            {post.images.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 custom-col">
                                    <Image src={item.image} alt={item.alt} className="w-100" />
                                </div>
                            ))}

                            {/* Images Lightbox */}
                            {post.imagesLightbox.map((item, index) => (
                                <div key={index} className="col-12 col-md-6 custom-col">
                                    <div className="lightbox-item" onClick={() => openLightbox(item.image)}>
                                        <div className="glightbox">
                                            <Image src={item.image} alt={item.alt} placeholder="blur" />
                                            <div className="lightbox-icon">
                                                <i className="bi bi-arrows-fullscreen"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>{/* end row */}
                    </div>{/* end container-fluid */}
                </div>
                {/* end Post Media */}

                {/* Prev/Next Post */}
                <div className="section-xs pt-0">
                    <div className="container-fluid">
                        <div className="row">
                            {prevPost ? (
                                <div className="col-6">
                                    <Link href={`/blog/${prevPost.slug}`} className="button button-outline">
                                        <span data-text="Prev Post">Prev Post</span>
                                    </Link>
                                </div>
                            ) : (
                                <div className="col-6">
                                    <button className="button button-outline non-disabled" disabled>
                                        <span data-text="Prev Post">Prev Post</span>
                                    </button>
                                </div>
                            )}
                            {nextPost ? (
                                <div className="col-6 text-end">
                                    <Link href={`/blog/${nextPost.slug}`} className="button button-outline">
                                        <span data-text="Next Post">Next Post</span>
                                    </Link>
                                </div>
                            ) : (
                                <div className="col-6 text-end">
                                    <button className="button button-outline non-disabled" disabled>
                                        <span data-text="Next Post">Next Post</span>
                                    </button>
                                </div>
                            )}
                        </div>{/* end row */}
                    </div>{/* end container-fluid */}
                </div>
                {/* end Prev/Next Post */}
                {lightboxImage && (
                    <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                )}
            </main>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your blog posts
    const paths = blogData.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog post with the matching slug
    const post = blogData.posts.find((post) => post.slug === slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    const currentIndex = blogData.posts.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? blogData.posts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogData.posts.length - 1 ? blogData.posts[currentIndex + 1] : null;

    return {
        props: {
            post,
            prevPost,
            nextPost,
        },
    };
}


export default PostPage