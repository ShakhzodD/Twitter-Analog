import React from 'react';
import PostListItem from '../PostListItem/PostListItem';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    return (
        <ul className="app-list list-group">
            {posts.map((post)=>{
                const {id, ...itemPost}= post
                return(
                <li key={id} className="list-group-item">
                    <PostListItem 
                    {...itemPost} 
                    onDelete={()=> onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
                </li>
                )
            })}
        </ul>
    );
};
export default PostList;