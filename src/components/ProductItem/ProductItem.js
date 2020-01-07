import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from "moment"
class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Hoạt động' : 'Không hoạt động';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.user_id}</td>
                <td>{product.parameter}</td>
                <td>{moment(product.date_time).format("LT")} {moment(product.date_time).format("l")}</td>
                <td>{product.lat}, {product.lng}</td>
                <td><img src={product.image} alt="device image" height="60" width="60"/></td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
