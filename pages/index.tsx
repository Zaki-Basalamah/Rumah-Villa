import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1>Pandanwangi Utama Residence</h1>
      <h2>Teluk Bayur Utama Residence</h2>
      <h3>Alibaba Village</h3>
      <h4>Arumba Utama Village</h4>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
