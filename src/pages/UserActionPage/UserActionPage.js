import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    actAddUserRequest,
    actFetchDoctorsRequest,
    actGetUserRequest,
    actUpdateUserRequest
} from './../../actions/index';
import {connect} from 'react-redux';


class UserActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtSex: '',
            txtAge: '',
            txtEmail: '',
            txtPhone: '',
            txtAvatar: '',
            txtDevice: '',
            arrDoctor: [],
            valueOption: '',
            doctorCode: '',
            txtUserName: '',
            txtPassword: '',
        };
    }

    componentDidMount() {
        const {match} = this.props;
        if (match) {
            const id = match.params.id;
            this.props.onEditUser(id);
        }
        fetch('https://5dcd7cd3d795470014e4d1cd.mockapi.io/doctors')
            .then(response => response.json())
            .then(arrDoctor => this.setState({arrDoctor}));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            const {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtSex: itemEditing.sex,
                txtAge: itemEditing.age,
                txtEmail: itemEditing.email,
                txtPhone: itemEditing.tel,
                txtAvatar: itemEditing.avatar,
                txtDevice: itemEditing.device_id,
                txtUserName: itemEditing.user_name,
                txtPassword: itemEditing.password
            });
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        const {
            id,
            txtName,
            txtSex,
            txtEmail,
            txtPhone,
            txtAvatar,
            valueOption,
            txtAge,
            doctorCode,
            txtUserName,
            txtPassword,
        } = this.state;
        var {history} = this.props;

        if (valueOption === '') {
            alert("Hãy chọn bác sĩ!")
            return
        } else {
            var user = {
                id: id,
                name: txtName,
                sex: txtSex,
                email: txtEmail,
                tel: txtPhone,
                avatar: txtAvatar,
                age: txtAge,
                doctor_code: doctorCode,
                doctor_id: valueOption,
                user_name: txtUserName,
                password: txtPassword,
            };
        }
        if (id) {
            this.props.onUpdateUser(user);
        } else {
            this.props.onAddUser(user);
        }
        history.goBack();
    }
    change = (event) => {
        this.setState({valueOption: event.target.value});
        this.state.arrDoctor.map((item, index) => {
                if (item.id === event.target.value) {
                    this.setState({doctorCode: item.doctor_code})
                }
            }
        )
    }

    render() {
        const {
            txtName,
            txtSex,
            txtEmail,
            txtPhone,
            txtAvatar,
            arrDoctor,
            txtAge,
            valueOption,
            txtUserName,
            txtPassword
        } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên đăng nhập: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtUserName"
                            value={txtUserName}
                            onChange={this.onChange}
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtPassword"
                            value={txtPassword}
                            onChange={this.onChange}
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tên người dùng: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                            required={true}
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
                            required={true}
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
                            required={true}
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
                            required={true}
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
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label>Link ảnh đại diện: </label>
                        <input
                            type="url"
                            className="form-control"
                            name="txtAvatar"
                            value={txtAvatar}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{marginRight: 10}}>ID Bác sĩ </label>
                        <select
                            id="lang"
                            onChange={this.change}
                            value={valueOption}
                        >
                            <option value={''}>Chọn bác sĩ</option>
                            {arrDoctor.map((item, index) => {
                                return <option value={item.id}>{item.id} - {item.name} </option>
                            })}
                        </select>
                    </div>
                    <Link to="/user-list" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Lưu Lại
                    </button>
                </form>
                <div className="btn">
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
        doctors: state.doctors
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
        },
        fetchAllDoctors: () => {
            dispatch(actFetchDoctorsRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);
