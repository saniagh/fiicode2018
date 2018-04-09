import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Checkbox, Modal, Button } from 'antd';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import CreateGroupView from './CreateGroupView.jsx';

class AllAllergies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  onShowModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  onHideModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {

    const columns = [
      {
        Header: 'Select',
        maxWidth: 46,
        accessor: '_id',
        Cell: props => <Checkbox
            onChange={() => this.props.onSelect(props.value)}/>,
      },
      {
        Header: 'Species',
        accessor: 'species',
      },
      {
        Header: 'Common',
        accessor: 'common',
      },
      {
        Header: 'IUISAllergen',
        accessor: 'iuisAllergen',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Group',
        accessor: 'group',
      },
      {
        Header: 'Length',
        accessor: 'length',
      },
      {
        Header: 'Accession',
        accessor: 'accession',
        Cell: props => <a
            href={`https://www.ncbi.nlm.nih.gov/protein/${props.value}`}
            target="_blank">{props.value}</a>,
      },
      {
        Header: 'GI#@',
        accessor: 'gi',
      },
      {
        Header: 'First Version',
        accessor: 'firstVersion',
      },
    ];

    return (
        <div>
          <Card>
            <button onClick={() => {
              this.props.onConfirmSelection();
              if (this.props.selected.length !== 0)
                this.onShowModal();
            }}>
              <Link to={`/create-group`}>
                Confirm selection
              </Link>
            </button>
            <ReactTable data={this.props.allergies}
                        columns={columns}/>
          </Card>
        </div>
    );
  }
}

export default AllAllergies;
