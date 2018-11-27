import React from 'react';
import {Table} from 'semantic-ui-react'
import {connect} from 'react-redux'
import pic from '../assets/icon-sushi-300x300.png'

const TableExampleStriped = (props) => (
  <div className="home-table-wrap">
    <div className="columns">
      <div className="column">
        <h3>Status</h3>
        <Table striped style={{width: "100%"}}>
          <Table.Body>
            <Table.Row>
              <Table.Cell><img src={pic}/></Table.Cell>
              <Table.Cell><p>Ninja</p></Table.Cell>
              <Table.Cell><p>5</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><img src={pic}/></Table.Cell>
              <Table.Cell><p>Samurai</p></Table.Cell>
              <Table.Cell><p>6</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><img src={pic}/></Table.Cell>
              <Table.Cell><p>Ninja</p></Table.Cell>
              <Table.Cell><p>5</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><img src={pic}/></Table.Cell>
              <Table.Cell><p>Samurai</p></Table.Cell>
              <Table.Cell><p>6</p></Table.Cell>
            </Table.Row>
          <Table.Row>
            <Table.Cell><img src={pic}/></Table.Cell>
            <Table.Cell><p>Ninja</p></Table.Cell>
            <Table.Cell><p>5</p></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><img src={pic}/></Table.Cell>
            <Table.Cell><p>Samurai</p></Table.Cell>
            <Table.Cell><p>6</p></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><img src={pic}/></Table.Cell>
            <Table.Cell><p>Ninja</p></Table.Cell>
            <Table.Cell><p>5</p></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><img src={pic}/></Table.Cell>
            <Table.Cell><p>Samurai</p></Table.Cell>
            <Table.Cell><p>6</p></Table.Cell>
          </Table.Row>
        </Table.Body>
        </Table>
      </div>
    </div>
  </div>
  );

export default connect(state => {
  return { tableData: state.homeReducer.chartData }
})(TableExampleStriped);

