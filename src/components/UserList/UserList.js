import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách người dùng</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID User</th>
                            <th>Tên</th>
                            <th>Giới tính</th>
                            <th>Năm sinh</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Avatar</th>
                            <th>Device ID</th>
                            <th>Hành Động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserList;
