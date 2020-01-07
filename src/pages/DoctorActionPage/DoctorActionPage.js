import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {actAddDoctorRequest, actGetDoctorRequest, actUpdateDoctorRequest} from './../../actions/index';
import {connect} from 'react-redux';


class DoctorActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtEmail: '',
            txtPhone: '',
            txtAvatar: '',
            txtSex: '',
            txtAge: '',
            txtUserName: '',
            txtPassword: ''
        };
    }

    componentDidMount() {
        const {match} = this.props;
        if (match) {
            const id = match.params.id;
            this.props.onEditDoctor(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            const {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtEmail: itemEditing.email,
                txtPhone: itemEditing.tel,
                txtAvatar: itemEditing.avatar,
                txtSex: itemEditing.sex,
                txtAge: itemEditing.age,
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
            txtEmail,
            txtPhone,
            txtAvatar,
            txtSex,
            txtAge,
            txtUserName,
            txtPassword
        } = this.state;
        const {history} = this.props;
        const doctor = {
            id: id,
            name: txtName,
            email: txtEmail,
            tel: txtPhone,
            avatar: txtAvatar,
            sex: txtSex,
            age: txtAge,
            user_name: txtUserName,
            password: txtPassword
        };
        if (id) {
            this.props.onUpdateDoctor(doctor);
        } else {
            this.props.onAddDoctor(doctor);
        }
        history.goBack();
    }

    render() {
        const {
            txtName,
            txtEmail,
            txtPhone,
            txtAvatar,
            txtSex,
            txtAge,
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
                        <label>Tên bác sĩ: </label>
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
                    <Link to="/doctor-list" className="btn btn-danger mr-10">
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
        onAddDoctor: (doctor) => {
            dispatch(actAddDoctorRequest(doctor));
        },
        onEditDoctor: (id) => {
            dispatch(actGetDoctorRequest(id));
        },
        onUpdateDoctor: (doctor) => {
            dispatch(actUpdateDoctorRequest(doctor));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorActionPage);
