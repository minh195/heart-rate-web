import React, {Component} from 'react';
import DoctorList from "../../components/DoctorList/DoctorList";
import DoctorItem from "../../components/DoctorItem/DoctorItem";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actFetchDoctorsRequest, actDeleteDoctorRequest} from "./../../actions/index";

class UserListPage extends Component {

    componentDidMount() {
        this.props.fetchAllDoctors();
    }

    onDelete = (id) => {
        this.props.onDeleteDoctor(id);
    }

    render() {
        var {doctors} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/doctor/add" className="btn btn-info mb-10">
                    Thêm bác sĩ
                </Link>
                <DoctorList>
                    {this.showDoctors(doctors)}
                </DoctorList>
            </div>
        );
    }

    showDoctors(doctors) {
        var result = null;
        if (doctors.length > 0) {
            result = doctors.map((doctor, index) => {
                return (
                    <DoctorItem
                        key={index}
                        doctor={doctor}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        doctors: state.doctors
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllDoctors: () => {
            dispatch(actFetchDoctorsRequest());
        },
        onDeleteDoctor: (id) => {
            dispatch(actDeleteDoctorRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
