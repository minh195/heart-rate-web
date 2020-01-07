import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DoctorItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { doctor, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.sex}</td>
                <td>{doctor.age}</td>
                <td>{doctor.tel}</td>
                <td><img src={doctor.avatar} alt="avatar user" height="60" width="60"/></td>
                <td>
                    <Link
                        to={`/doctor/${doctor.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(doctor.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default DoctorItem;
