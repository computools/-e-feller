import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import RefillOrderTable from './refillOrder-table'
import { ModalActions } from '../store/actions'
import { HomeAction } from '../store/actions'
import { modalStyles } from '../styles/cssInJs';

const HomeActions = (props) => (
  <div className="home-action-btn">
    <h3>Action</h3>
    <button
      onClick={ () => { props.openRefillOrderModal() } }
      className="btn-one">Refill
    </button>
    <button onClick={
              () => props.fetchLocationUnits()
            }
            className="btn-one">fetch Units</button>
    <button className="btn-one">Market</button>
    <ReactModal
      isOpen={props.showRefillModal}
      style={modalStyles}
    >
      <h2 style={{textAlign: "center"}}>Refill order</h2>
      <RefillOrderTable/>
      <i className="fa fa-times" aria-hidden="true" onClick={props.closeRefillOrderModal} style={{position: "absolute", top: 25, right: 25}}/>
    </ReactModal>
  </div>
);


export default connect(
  state => {
    return {
      showRefillModal: state.modalReducer.showRefillModal
    }
  },
  dispatch => {
    return {
      openRefillOrderModal: () => {
        dispatch(ModalActions.showRefillOrderModal())
      },
      closeRefillOrderModal: () => {
        dispatch(ModalActions.closeRefillOrderModal())
      },
      fetchLocationUnits: () => {
        dispatch(HomeAction.fetchLocationUnits())
      }
    }
})(HomeActions)