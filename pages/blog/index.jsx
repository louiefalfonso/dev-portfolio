import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { blogData } from '@/components/Blog/BlogData';
import { headerData } from '@/components/Header/HeaderData';

const BlogPage = () => {
    return (
        <>
            <Head>
                <title>{blogData.seoPage.title}</title>
                <meta name="description" content={blogData.seoPage.description} />
                <meta name="keywords" content={blogData.seoPage.keywords} />
            </Head>
            <main>
                <div className="section-xs">
                    <div className="container-fluid text-center">
                        <h1 className="display-1 fw-medium mb-0">{headerData.last}</h1>
                    </div>
                </div>

                <div className="section-xs pt-0">
                    <div className="container-fluid">
                        <div className="row g-0">
                            {/* Blog Post */}
                            {blogData.posts.map((item, index) => (
                                <div key={index} className="col-12">
                                    <div className={`styled-box p-lg-5 ${index % 2 !== 0 ? 'style-2' : ''}`}>
                                        <div data-hover-img={item.mainImage.src}>
                                            <ul className="list-inline-dash mb-2 sm-heading">
                                                <li>{item.date}</li>
                                                <li>{item.category}</li>
                                            </ul>
                                            <h2 className="display-5 fw-medium">
                                                <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                                            </h2>
                                            <p className="fs-5">{item.description}</p>
                                        </div>
                                        <Link className="button button-outline mt-4" href={`/blog/${item.slug}`}>Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>{/* end row */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default BlogPage