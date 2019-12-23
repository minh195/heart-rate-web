import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { user, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.sex}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.tel}</td>
                <td><img src={user.avatar} alt="avatar user" height="42" width="42"/></td>
                <td>{user.doctor_code}</td>
                <td>
                    <Link
                        to={`/user/${user.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(user.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;
