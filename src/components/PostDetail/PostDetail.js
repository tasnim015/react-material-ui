import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId} = useParams();
    const [detail,setDetail] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])
    const [comment,setComment] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    
    return (
        <div>
        <div className="detail">
           <h1>Id: {detail.id}</h1>
           <h3>TITLE: {detail.title}</h3>
           <h5>{detail.body}</h5>
        </div>
           <div className="comment-section">
               <h1 style={{textAlign:"center",paddingBottom:"20px"}} >Comment Section</h1>
           {
               comment.map(comments =><Comment comment={comments}></Comment>)
           } 
           </div>
        </div>
    );
};

export default PostDetail;