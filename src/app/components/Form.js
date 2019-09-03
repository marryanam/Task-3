import React, {Component} from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const textField =  {
    marginLeft: "20px",
    marginRight: "20px",
    width: 300,
};
const button={
    width: 200,
    margin: "20px auto",
    padding: "10px 0",
};
const container= {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '300px',
    margin: '0 auto',
};
const form = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '300px',
    margin: '0 auto',
    display: "flex",
    minHeight:"100vh",
};
/*
Форма входу (/ login) приймає "фейковий" дані:

username: Admin
password: 12345
Якщо введені інші дані, то показується повідомлення:

Ім'я користувача або пароль введені не вірно

Якщо введені коректні дані, то перекидати на сторінку / profile
*/    

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password:'',
            redirect: false,
            open: false
        };

        this.onChangeLogin = this.onChangeLogin.bind(this);        
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmited = this.onSubmited.bind(this);   
        this.handleClose = this.handleClose.bind(this);
    }
    onSubmited(){   
        if(this.state.login && this.state.password)
        {
            if(this.state.login==="Admin" && this.state.password==="12345")
            {                
                console.log("auth");  
                this.setState({redirect: true});
                localStorage.setItem('auth', true);
            }
            else                
            {
                localStorage.setItem('auth', false); 
                this.setState({ open: true })
            }
        }
    }
    onChangeLogin(event) {
        this.setState({login: event.target.value});
    }
    onChangePassword(event) {
        this.setState({password: event.target.value});
    }
    renderRedirect(){
        if (this.state.redirect) {
          return <Redirect to='/profile' />
        }
    }
    handleClose(event) {
        this.setState({ open: false })
    }
    render() {        
        const { open } = this.state;
        return (
            <div style={container}>
                {this.renderRedirect()}
                <form  autoComplete="off" style={form} onSubmit={this.onSubmited}>
                    <Typography variant="h4" >
                        Login to your Profile
                    </Typography>

                    <TextField id="standard-name-input" style={textField} onChange={this.onChangeLogin} value={this.state.login} label="Name"  type="name" autoComplete="current-name" margin="normal" />
                    <TextField id="standard-password-input" style={textField} onChange={this.onChangePassword} value={this.state.password}  label="Password"  type="password" autoComplete="current-password" margin="normal" />
                    
                    <Button variant="contained" color="primary" type="submit" style={button}>
                        Login
                    </Button>
                </form>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} style={{backgroundColor:"#AA1122"}}
                    open={open} autoHideDuration={6000} onClose={this.handleClose}
                    ContentProps={{
                      'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Autherization filed</span>}
                    action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}
export default Form;