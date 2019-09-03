import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  	card: {
    	maxWidth: 320,
    	margin: "20px auto",
      	cursor:'pointer',
  	},
  	media: {
    	height: 0,
    	paddingTop: '56.25%',
  	},
  	title:{
  		color:'#3f51b5',
  		textAlign: "center",
  	},
  	text:{
  		fontStyle: 'italic',
  	}
}));
export default function ReviewCard(props) {
  	const classes = useStyles();
  	const [expanded, setExpanded] = React.useState(false);
	return(
		<Card className={classes.card}>
		    <CardActionArea>
				<CardContent>
			    	<Typography gutterBottom variant="h6" className={classes.title}>
		            	{props.news.name}
		          	</Typography>
			    </CardContent>
			    <CardMedia
			        className={classes.media}
			        image={window.location.origin + props.news.img}
			        title="Paella dish"
			     />
			    <CardContent className={classes.text}>
		          	<Typography paragraph variant="body2">
		             	{props.news.content}
		          	</Typography>
		        </CardContent>
		    </CardActionArea>
	    </Card>
	)
}
