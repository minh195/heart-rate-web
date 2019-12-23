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
            txtAvatar: ''
        };
    }

    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditDoctor(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtEmail: itemEditing.email,
                txtPhone: itemEditing.tel,
                txtAvatar: itemEditing.avatar,
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
        var {id, txtName, txtEmail, txtPhone, txtAvatar} = this.state;
        var {history} = this.props;
        var doctor = {
            id: id,
            name: txtName,
            email: txtEmail,
            tel: txtPhone,
            avatar: txtAvatar,
        };
        if (id) {
            this.props.onUpdateDoctor(doctor);
        } else {
            this.props.onAddDoctor(doctor);
        }
        history.goBack();
    }

    render() {
        var {txtName, txtEmail, txtPhone, txtAvatar} = this.state;
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
