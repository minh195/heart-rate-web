import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    actAddProductRequest,
    actFetchUsersRequest,
    actGetProductRequest,
    actUpdateProductRequest
} from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtUserId: '',
            chkbStatus: '',
            valueOption: '',
            arrUser: [],
            userCode: '',
            txtImage:''
        };
    }

    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
        fetch('https://5dcd7cd3d795470014e4d1cd.mockapi.io/users')
            .then(response => response.json())
            .then(arrUser => this.setState({arrUser}));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status,
                txtImage:itemEditing.image
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
        var {id, txtName, valueOption, chkbStatus, userCode, txtImage} = this.state;
        var {history} = this.props;
        if (valueOption === '') {
            alert("Hãy chọn người dùng!")
            return
        } else {
            var product = {
                id: id,
                name: txtName,
                user_id: valueOption,
                status: chkbStatus,
                user_code: userCode,
                image: txtImage
            };
        }

        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }
    change = (event) => {
        this.setState({valueOption: event.target.value});
        this.state.arrUser.map((item, index) => {
                if (item.id === event.target.value) {
                    this.setState({userCode: item.user_code})
                }
            }
        )
    }

    render() {
        var {txtName, valueOption, chkbStatus, arrUser,txtImage} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên thiết bị: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh: </label>
                        <input
                            type="url"
                            className="form-control"
                            name="txtImage"
                            value={txtImage}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{marginRight: 10}}>User ID: </label>
                        <select
                            id="lang"
                            onChange={this.change}
                            value={valueOption}
                        >
                            <option value={''}>Chọn người dùng</option>
                            {arrUser.map((item, index) => {
                                return <option value={item.id}>{item.id} - {item.name} </option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Trạng Thái: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                            Hoạt động
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
