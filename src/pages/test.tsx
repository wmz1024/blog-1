import React, { ReactNode, useState } from "react";
import { GetStaticProps } from "next";
import { getPostsFrontMatter, PartialFrontMatter } from "@/lib/get-posts";
import Layout from "@/components/layouts";
import { generateMainFeeds } from "@/lib/feeds";
import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const PostsList = dynamic(() => import("@/components/PostsList"));

type HomeProps = {
  allPosts: PartialFrontMatter[];
};

const Home = ({ Posts }: HomeProps): ReactNode => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = Posts.filter((frontMatter) =>
    frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Layout title="Blog Index">
      <Nav>
        <Link href="tags">All Tags</Link>
      </Nav>
      <input
        aria-label="Search by post title"
        placeholder="Posts ..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {!filteredBlogPosts.length && (
        <p>No posts found, try searching for something else.</p>
      )}
          <PostsList  posts={filteredBlogPosts} />
      <Footer />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  generateMainFeeds();
  const Posts = getPostsFrontMatter();
  return {
    props: {
      Posts,
    },
  };
};

export default Home;
