import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { withStyles } from '@material-ui/core/styles';
import styles from './FooterMapStyles';

class FooterMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 2.5498124789463175,
      lat: 41.57872132733914,
      zoom: 15,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYmNubGVnZW5kIiwiYSI6ImNrajVuanU5ejQ3MnoyeW40bG9reGlucXoifQ.XU5jIcZSWgyP-0xBjFotFQ';
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    // const popup = new mapboxgl.Popup({
    //   closeButton: false,
    //   closeOnClick: false,
    //   anchor: 'bottom',
    //   maxWidth: '200px',
    // }).setHTML(
    //   '<div class="footerMapPopup"><img src="/favicon.ico" class="footerMapImg"/><h1 class="footerMapTitle">Farmàcia del Mar</h1></div>'
    // );

    const marker = new mapboxgl.Marker({
      color: '#0047ba',
    })
      .setLngLat([2.5498124789463175, 41.57872132733914])
      .addTo(map);
    // .togglePopup();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div ref={(el) => (this.mapContainer = el)} className={classes.map} />
      </div>
    );
  }
}

export default withStyles(styles)(FooterMap);
