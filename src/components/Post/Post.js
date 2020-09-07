import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Post.css';

// using simple-card material UI

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const Post = (props) => {
    const {title,body,id} = props.post;
    const classes = useStyles();
    return (
        <div>
           <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h1>Title : {title}</h1>
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        
        <Typography variant="body2" component="p">
         {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/posts/${id}`}><Button size="small" variant="contained" color="primary"> Show Detail </Button></Link>
      </CardActions>
    </Card> 
        </div>
    );
};

export default Post;