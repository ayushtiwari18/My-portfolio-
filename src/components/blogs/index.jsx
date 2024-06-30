import React from "react";
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";
import "./style.scss";

const Blogs = () => {
    const blogData = [
        {
            user: "John Doe",
            date: "Mar 8 2022",
            image: Blog1,
            title: "Quis Autem Vea Eum Iure Reprehendrit",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            user: "John Doe",
            date: "Mar 8 2022",
            image: Blog2,
            title: "Quis Autem Vea Eum Iure Reprehendrit",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            user: "John Doe",
            date: "Mar 8 2022",
            image: Blog3,
            title: "Quis Autem Vea Eum Iure Reprehendrit",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            user: "John Doe",
            date: "Mar 8 2022",
            image: Blog2,
            title: "Quis Autem Vea Eum Iure Reprehendrit",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];

    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={index}
                        {...blog}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Blogs;
