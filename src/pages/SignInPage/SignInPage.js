import React, {Component} from 'react';
import {FaFacebookF, FaGoogle, FaTwitter} from 'react-icons/fa';
import Router from "react-router-dom/Router";
import {Link} from "react-router-dom";

const styles = {
    paperContainer: {
        backgroundImage: `url("https://github.com/minh195/BTL-III/blob/minhka/App/Images/bg-01.jpg?raw=true")`
    }
};

class SignInPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            data: null
        }
    }

    onChangeUsername = (text) => {
        this.setState({
            userName: text.target.value
        })
    }

    componentDidMount() {
        fetch('https://5dc3c7871666f6001477fefb.mockapi.io/admins')
            .then(response => response.json())
            .then(data => this.setState({data}));
    }

    onChangePassword = (text) => {
        this.setState({
            password: text.target.value
        })
    }
    _onClick = async () => {
        let {userName, password, data} = this.state
        console.log("username, password: ", userName, password)
        await data.map((item, index) => {
                if (item.user_name === userName && item.password === password) {
                   alert("Login success!!!")
                }
                else {
                }
            }
        )
    }

    render() {
        console.log("Data: ", this.state.data)
        return (
            <div className="limiter">
                <div class="container-login100" style={styles.paperContainer}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form className="login100-form validate-form" onSubmit={this._onClick}>
                            <span className="login100-form-title p-b-49">Login</span>
                            <div className="wrap-input100 validate-input m-b-23"
                                 data-validate="Username is required">
                                <span className="label-input100">Username</span>
                                <input className="input100"
                                       type="text"
                                       name="username"
                                       placeholder="Type your username"
                                       onChange={this.onChangeUsername}
                                />
                                <span className="focus-input100" data-symbol="&#xf206;"/>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100"
                                       type="password"
                                       name="pass"
                                       placeholder="Type your password"
                                       onChange={this.onChangePassword}
                                />
                                <span className="focus-input100" data-symbol="&#xf190;"/>
                            </div>
                            <div className="text-right p-t-8 p-b-31">
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button className="login100-form-btn">
                                      Login
                                    </button>
                                </div>
                            </div>
                            <div className="txt1 text-center p-t-54 p-b-20">
                                <span>Or Sign Up Using</span>
                            </div>
                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg1">
                                    <FaFacebookF/>
                                </a>
                                <a href="#" className="login100-social-item bg2">
                                    <FaTwitter/>
                                </a>
                                <a href="#" className="login100-social-item bg3">
                                    <FaGoogle/>
                                </a>
                            </div>
                            <div className="flex-col-c p-t-155">
                                <span className="txt1 p-b-17">Or Sign Up Using</span>
                                <a href="#" className="txt2">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInPage;
