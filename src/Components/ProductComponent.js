import { makeStyles, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexFlow: "row",
        float: "left",
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(38),
            height: theme.spacing(38),
            padding: "20px",
            display: "inline-Grid",
        },
        textAlign: "center",


    },

    img: {
        width: "8em",
    }
}));

export default function ProductComponent() {
    const classes = useStyles();
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((item) => {
        return (
            <div key={item.id} className={classes.root}>
                <Link to={`/product/${item.id}`}>
                    <Paper elevation={3} >
                        <div>
                            <img className={classes.img} src={item.image} alt={item.title} />

                        </div>
                        <div>
                            <Typography variant="h5">{item.title}</Typography>
                        </div>
                        <div>
                            <Typography variant="body1">$ {item.price}</Typography>
                        </div>
                        <div>
                            <Typography variant="caption">{item.category}</Typography>
                        </div>
                    </Paper>
                </Link>
            </div>
        )
    })
    return (
        <>{renderList}</>
    )
}
