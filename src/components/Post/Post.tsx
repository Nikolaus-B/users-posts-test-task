import React from "react";

import { IPost } from "../../interfaces/Posts";
import { PostStyled } from "./Post.styled";

interface UserProps {
  post: IPost;
}

export const Post: React.FC<UserProps> = ({ post }) => {
  return (
    <PostStyled>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </PostStyled>
  );
};
