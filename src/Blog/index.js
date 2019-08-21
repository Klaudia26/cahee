import React from 'react';
import Button from '../Button';
import './style.scss';

const Blog = () => {
    return (
        <section className="section-blog" id='blog'>
            <h2 className="heading-primary">Blog</h2>
            <p className="paragraph">Long established fact that. Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="gallery">
                <div className="pic pic--1">
                    <div className="pic__date">20<br />nov</div>
                    <div className="pic__name">
                        <div className="pic__title">Green Smothies: Too Much of a Good Things?</div>
                        <div className="pic__author">By Joanna Malinowska - 2 hours ago</div>
                    </div>
                </div>
                <div className="pic pic--2">
                    <div className="pic__date">14<br />nov</div>
                    <div className="pic__name">
                        <div className="pic__title">Green Smothies: Too Much of a Good Things?</div>
                        <div className="pic__author">By Joanna Malinowska - 2 hours ago</div>
                    </div>
                </div>
                <div className="pic pic--3">
                    <div className="pic__date">10<br />nov</div>
                    <div className="pic__name">
                        <div className="pic__title">Green Smothies: Too Much of a Good Things?</div>
                        <div className="pic__author">By Joanna Malinowska - 2 hours ago</div>
                    </div>
                </div>
            </div>
            <Button className="btn--red" text='View More' />
        </section>
    )
}
export default Blog;   