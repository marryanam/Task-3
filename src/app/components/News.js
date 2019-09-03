import React from 'react';
import ReviewCard from './Newsbase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const title = {
  	textAlign: 'center',
  	padding: "40px 0",
};
const cover={
	paddingBottom: "100px",
};

class News extends React.Component {
	state = {
	  	news :[
	  		{
	  			name: 'News title 1', 
	  	 		img: '/img/61.jpg',
	  	 	 	content: '11Lorem ipsum dolor sit amet, consectetur adipiscing elqua. Ut enim ad minio laboris nisi ut aliquip ex ea commodo consequat.'
	  	 	},
	  	 	{
	  			name: 'News 2', 
	  	 		img: '/img/126.jpg',
	  	 	 	content: '22Lorem ipsum dolor sit amet, consectetur adipiscing elqua. Ut enim ad minio laboris nisi ut aliquip ex ea commodo consequat.'
	  	 	},
	  	 	{
	  			name: 'News 3', 
	  	 		img: '/img/12910.jpg',
	  			content: '33Lorem ipsum dolor sit amet, consectetur adipiscing elqua. Ut enim ad minio laboris nisi ut aliquip ex ea commodo consequat.'
	  	 	},
	  	 	{
	  			name: 'News title 4', 
	  	 		img: '/img/13390.jpg',
	  	 		content: '44Lorem ipsum dolor sit amet, consectetur adipiscing elqua. Ut enim ad minio laboris nisi ut aliquip ex ea commodo consequat.'
	  	 	},
	  	 	{
	  			name: 'News 5', 
	  	 		img: '/img/20488.jpg',
	  	 		content: '55Lorem ipsum dolor sit amet, consectetur adipiscing elqua. Ut enim ad minio laboris nisi ut aliquip ex ea commodo consequat.'
	  	 	},
	  	 	{
	  			name: 'News 6', 
	  	 		img: '/img/31214.jpg',
	  	 	 	content: '66Lorem ipsum dolor sit amet, consectetur adipiscing elqua. Ut enim ad minio laboris nisi ut aliquip ex ea commodo consequat.'
	  	 	}

	  	]
	};

	render() {
		return(
			<div className="news">
				<Typography variant="h4" gutterBottom style={title}>
			        News
			    </Typography>
			    <div className="news__block" style={cover}>
				    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
						{this.state.news.map(x => {
							return(
	                    		<Grid item md={4} sm={6} xs={12}>
									<ReviewCard news={x}/>
								</Grid>
							)
						})}
					</Grid>	
				</div>
			</div>
		)
	}
}
export default News;