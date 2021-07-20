import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://cdn.shopify.com/s/files/1/0276/5753/5599/products/Andreas-01_1024x1024@2x.jpg?v=1618901625?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://cdn.shopify.com/s/files/1/0276/5753/5599/products/FNOR-22801_1024x1024@2x.jpg?v=1610612697?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://cdn.shopify.com/s/files/1/0276/5753/5599/products/ParisBedroom_1024x1024@2x.jpg?v=1617953160?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://cdn.shopify.com/s/files/1/0276/5753/5599/products/FTVI-7535749ak_1024x1024@2x.jpg?v=1612958075?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}
