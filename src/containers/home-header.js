import React, { Component } from "react";
import RcSelect from '../components/RcSelect'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux'
import {action as toggleMenu} from 'redux-burger-menu';
import {HomeAction} from '../store/actions';
import moment from 'moment';

class HomeHeader extends Component {
  render() {

    return(
      <div className="home-header-wrapp">
        <div className="columns">
          <div className="column is-half-desktop is-half-tablet is-mobile">
            <i className="fa fa-bars" aria-hidden="true" onClick={ this.props.toggleBurgerMenu } />
            <div className="home-header-title" >
              <h2>
                {this.props.translate.contentTitle}
              </h2>
            </div>
          </div>
          <div className="column is-12-mobile is-half-tablet is-half-desktop">
            <div className="date-picker">
              <RcSelect currentLocation={ this.props.currentLocation }
                        userLocations={ this.props.userLocations }
                        changeUserLocation={ this.props.changeUserLocation }
              />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column sub-header-selects">
            <div className="start-date-select">
              <DatePicker
                selected={ this.props.selectedStartDate }
                onChange={ e => e < this.props.selectedEndDate && this.props.startDateChart(e) }
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="YYYY-MM-DD, HH:mm"
              />
            </div>
            <div className="end-date-select">
              <DatePicker
                selected={ this.props.selectedEndDate }
                onChange={ e => (e < moment() && e > this.props.selectedStartDate) && this.props.endDateChart(e) }
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="YYYY-MM-DD, HH:mm"
              />
            </div>
            <div className="apply-select">
              <button
                className="btn-apply"
                onClick={this.props.fetchData}>{this.props.translate.applyBtn}</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  state => {
    return {
      selectedStartDate: state.homeReducer.chartRangeDate.startDate,
      selectedEndDate: state.homeReducer.chartRangeDate.endDate,
    }
  },
  dispatch => {
    return {
      toggleBurgerMenu: () => dispatch(toggleMenu(true)),
      startDateChart: data => {
        dispatch( HomeAction.startDateChange(data) )
      },
      endDateChart: data => {
        dispatch ( HomeAction.endDateChange(data) )
      },
      fetchData: () => {
        dispatch ( HomeAction.fetchChartData() )
      }
    }
  }
  )(HomeHeader);