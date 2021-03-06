import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from'react-redux';

import Post from './Post/Post.js';

import useStyles from './styles.js';

const Posts = ({ setCurrentId }) => {
    // FETCH DATA USING REDUX
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid container className={classes.mainContainer} alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;