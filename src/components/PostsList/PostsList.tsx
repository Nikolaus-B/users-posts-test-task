import { IPost } from "../../interfaces/Posts";
import { selectPosts } from "../../redux/posts/postsSelectors";
import { useAppSelector } from "../../redux/store";
import { Post } from "../Post/Post";
import { PostsListStyled } from "./PostsList.styled";

export const PostsList = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <PostsListStyled>
      {posts.map((post: IPost) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </PostsListStyled>
  );
};
