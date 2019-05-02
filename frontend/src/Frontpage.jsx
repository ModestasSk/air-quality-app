import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/style.css';
import background from '../public/assets/background.png';
import circle from '../public/assets/circle.png';
import arrow from '../public/assets/arrow.png';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      country : '',
    }
   
  }
  render() {

    var { country, region, isLoaded } = this.state;

      return (
        
          <section className="background" style={{ backgroundImage: `url(${background})` }}>
          
            <Typography className="header" variant="title" color="inherit" align="center">
              Air quality in {this.props.nearestCity.city}, {this.props.nearestCity.country}
          </Typography>
            <Typography className="bubble" variant="title" color="inherit" align="center" style={{ backgroundImage: `url('${circle}')` }}>
              <h1 className="bubbletext">{this.props.nearestCity.current.pollution.aqius}</h1>             
            </Typography>
            <Typography className="status">
            {this.props.status}
            </Typography>
            <Typography className="weatherIcon" alt="product" align="center">
              <h1 className="stats" align="center">
                Hum {this.props.nearestCity.current.weather.hu} | {this.props.nearestCity.current.weather.tp}°C | w/s {this.props.nearestCity.current.weather.ws} m/s
            </h1>
              <h1 className="statsTS" align="center">Last updated: {this.props.nearestCity.current.pollution.ts}</h1>
            </Typography>
            <h1 align="center">
              <Typography className="showmore" aligh="center" style={{ backgroundImage: `url('${arrow}')` }}></Typography>
            </h1>
          </section>
          
      );
    
  }
}
