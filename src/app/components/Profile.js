import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const title = {
    textAlign: "center",
    fontWeight: 600,
    color: "#3f51b5",
    paddingBottom: "30px",
}
const profile = {
    padding: "40px 0",
}
class Profile extends React.Component {
    constructor(props){
        super(props);
        let auth = null;
        if(localStorage.getItem('auth')) 
            auth = localStorage.getItem('auth')==='false';
        else
            auth = true;

        this.state = {
            redirect: auth,
            data: null,
        };
        this.onLogout = this.onLogout.bind(this);
        this.onFetch = this.onFetch.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.co/api/films/2/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }

    onLogout(){
        localStorage.setItem('auth', false);
        this.setState({redirect: true});
    }    
    renderRedirect(){        
        if (this.state.redirect){   
            return <Redirect to='/login' />
        }
    }
    onFetch(){
        if(this.state.data){
            return(
                <li>{this.state.data.title}</li>
            );
        }

    }
    render() {
        return (
            <div style={profile}>
                <Button onClick={this.onLogout} style={{cursor:"pointer", float:"right"}}>Logout</Button>
               	<Typography variant="h3" style={title} component="h2" gutterBottom>
			        My Profile
			    </Typography>
                {this.renderRedirect()}
			    <Card>
				    <CardContent>                           
			            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                        <ul>
                            {this.onFetch()}
                        </ul>
			        </CardContent>
			    </Card>
            </div>
        );
    }
}
export default Profile;