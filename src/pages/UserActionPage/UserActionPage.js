import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {actAddUserRequest, actGetUserRequest, actUpdateUserRequest} from './../../actions/index';
import {connect} from 'react-redux';


class UserActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtSex:'',
            txtAge:'',
            txtEmail:'',
            txtPhone:'',
            txtAvatar:'',
            txtDevice:''
        };
    }

    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditUser(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtSex: itemEditing.sex,
                txtAge: itemEditing.age,
                txtEmail: itemEditing.email,
                txtPhone: itemEditing.tel,
                txtAvatar: itemEditing.avatar,
                txtDevice: itemEditing.device_id
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var {id, txtName, txtSex, txtEmail, txtPhone, txtAvatar, txtDevice, txtAge} = this.state;
        var {history} = this.props;
        var user = {
            id: id,
            name: txtName,
            sex: txtSex,
            email: txtEmail,
            tel: txtPhone,
            avatar: txtAvatar,
            age: txtAge,
            device_id: txtDevice
        };
        if (id) {
            this.props.onUpdateUser(user);
        } else {
            this.props.onAddUser(user);
        }
        history.goBack();
    }

    render() {
        var {txtName, txtSex, txtEmail, txtPhone, txtAvatar, txtDevice, txtAge} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên người dùng: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giới tính: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtSex"
                            value={txtSex}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Năm sinh: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtAge"
                            value={txtAge}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="email"
                            className="form-control"
                            name="txtEmail"
                            value={txtEmail}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPhone"
                            value={txtPhone}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Avatar URL: </label>
                        <input
                            type="url"
                            className="form-control"
                            name="txtAvatar"
                            value={txtAvatar}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Devide ID: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtDevice"
                            value={txtDevice}
                            onChange={this.onChange}
                        />
                    </div>
                    <Link to="/user-list" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Lưu Lại
                    </button>
                </form>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user));
        },
        onEditUser: (id) => {
            dispatch(actGetUserRequest(id));
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);
