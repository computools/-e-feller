import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {connect} from 'react-redux';
/*https://github.com/reactjs/react-modal*/
import ReactModal from 'react-modal';
import {ModalActions} from '../store/actions'
import AddAlertForm from './addAlertForm';
import UpdateAlertForm from './updateAlertForm';
import {ProfileActions} from '../store/actions';
import {modalStyles} from '../styles/cssInJs';

class notificationSettings extends Component {

  tableNotification = () => (
    <div className="notification-table">
      <Table striped style={{width: "100%"}}>
        <Table.Header>
          <Table.Row>
            {Object.keys(this.props.profile[0]).map((cell, index) => <Table.HeaderCell
              key={index}>{cell}</Table.HeaderCell>)}
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.profile.map((row, index) =>
            <Table.Row key={index}>
              {Object.values(row).map((cell, index) => <Table.Cell key={index}>{cell}</Table.Cell>)}
              <Table.Cell>
              <span className="edit-actions">
                <i onClick={() => {
                  this.editMode(row)
                }} className="fa fa-pencil-square-o" aria-hidden="true"/>
                <i onClick={() => {
                  this.props.deleteAlert(row)
                }} className="fa fa-trash-o" aria-hidden="true" style={{marginLeft: "25px"}}/>
              </span>
              </Table.Cell>
            </Table.Row>)
          }
        </Table.Body>
      </Table>
    </div>
  );

  editMode(row) {
    this.props.openEditAlertModal();
    this.props.addEditingRow(row);
    console.log("edit form and val row", row);
  }

  render() {
    return (
      <div className="notification-settings">
        <h2>
          {this.props.translate.alertSettings}
        </h2>
        <div className="settings-table-wrap">
          <div className="columns">
            <div className="column">
              <button onClick={this.props.openAddAlertModal}
                      className="btn-one">{this.props.translate.addNewBtn}</button>
              <ReactModal
                isOpen={this.props.showAddModal}
                style={modalStyles}
              >
                <h2 style={{textAlign: "center"}}>{this.props.translate.addNotificationTitle}</h2>
                <AddAlertForm
                  onSubmit={value => {
                    this.props.addNewAlert(value);
                    this.props.closeAddAlertModal()
                  }
                  }
                />
              </ReactModal>
              <ReactModal
                isOpen={this.props.showEditModal}
                style={modalStyles}
              >
                <h2 style={{textAlign: "center"}}>{this.props.translate.editNotificationTitle}</h2>
                <UpdateAlertForm onSubmit={value => {
                  this.props.closeEditAlertModal();
                  this.props.editAlert(value)
                }}/>
              </ReactModal>
              {this.props.profile.length
                ? this.tableNotification()
                : <div>
                  <h3 style={{textAlign: "center"}}>
                    {this.props.translate.emptyNotification}
                  </h3>
                </div>
              }
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      profile: state.profileReducer.profile.settings,
      showAddModal: state.modalReducer.showAddModal,
      showEditModal: state.modalReducer.showEditModal
    }
  },
  dispatch => {
    return {
      addNewAlert: data => {
        dispatch(ProfileActions.addNewAlert(data));
      },
      deleteAlert: data => {
        dispatch(ProfileActions.deleteAlertMode(data));
      },
      editAlert: data => {
        dispatch(ProfileActions.editAlertMode(data));
      },
      addEditingRow: data => {
        dispatch(ProfileActions.addEditingRow(data));
      },
      openAddAlertModal: () => {
        dispatch(ModalActions.showAddModal());
      },
      openEditAlertModal: () => {
        dispatch(ModalActions.showEditModal());
      },
      closeAddAlertModal: () => {
        dispatch(ModalActions.closeAddModal());
      },
      closeEditAlertModal: () => {
        dispatch(ModalActions.closeEditModal());
      }
    }
  })(notificationSettings)