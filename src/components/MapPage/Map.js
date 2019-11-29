import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuthRequest } from '../../redux/reducer';
import { getRoute } from '../../redux/middlewares/serverconnect';

import MapPage from './MapPage';
import OrderTaxi from '../orderTaxi/orderTaxi';

class Map extends Component {
  state = {
    hasOrder: false,
    orderCoords: null
  };

  componentDidMount() {
    document.title = 'Карта | Loft Taxi';
  }

  makeOrder = (from, to) => {
    getRoute(from, to).then(orderCoords => {
      this.setState({
        hasOrder: true,
        orderCoords
      });
    });
  };

  clearForm = () => {
    this.setState({
      hasOrder: false,
      orderCoords: null
    });
  };

  render() {
    const { hasOrder, orderCoords } = this.state;

    return (
      <>
        <MapPage orderCoords={orderCoords} />
        <OrderTaxi
          hasOrder={hasOrder}
          makeOrder={this.makeOrder}
          clearForm={this.clearForm}
        />
      </>
    );
  }
}
const mapStateToProps = state => state.auth;
const mapDispatchToProps = {
  fetchAuthRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);