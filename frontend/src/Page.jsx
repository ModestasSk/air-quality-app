import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey, yellow } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Toolbar, Paper, Grid } from '@material-ui/core';
import '../styles/style.css';
import background from '../public/assets/background.png';
import background2 from '../public/assets/background2.png';
import background3 from '../public/assets/background3.png';
import circle from '../public/assets/circle.png';
import arrow from '../public/assets/arrow.png';
import {
  Container, Row, Col
} from 'reactstrap';
import Additional from './Additional.jsx';
import Frontpage from './Frontpage.jsx';


export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      item : null,
      status: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var statusText = '';
    fetch('http://api.airvisual.com/v2/nearest_city?key=LdTsKf5zgrF7qQ4Mb')
      .then(res => res.json())
      .then(json => {
        
        this.setState({
          isLoaded: true,
          item: json,
        })
        this.statusUpdate()
      });
  }

  statusUpdate(){
    if(this.state.item.data.current.pollution.aqius > 0){
      this.setState({
        status: 'Everyone can continue their outdoor activities normally.'
      })
    }
   if(this.state.item.data.current.pollution.aqius > 50){
      this.setState({
        status: 'Only very few hypersensitive people should reduce outdoor activities.'
      })
    }
    if(this.state.item.data.current.pollution.aqius > 100){
      this.setState({
        status: 'Children, seniors and individuals with respiratory or heart diseases should reduce sustained and high-intensity outdoor exercises.'
      })
    }
   if(this.state.item.data.current.pollution.aqius > 150){
      this.setState({
        status: 'Children, seniors and individuals with respiratory or heart diseases should avoid sustained and high-intensity outdoor exercises. General population should moderately reduce outdoor activities.'
      })
    }
   if(this.state.item.data.current.pollution.aqius > 200){
      this.setState({
        status: 'Children, seniors and individuals with heart or lung diseases should stay indoors and avoid outdoor activities. General population should reduce outdoor activities.'
      })
    }
    if(this.state.item.data.current.pollution.aqius > 300){
      this.setState({
        status: 'Children, seniors and the sick should stay indoors and avoid physical exertion. General population should avoid outdoor activities.'
      })
    }
  }

  handleClick(country, city) {
    fetch('http://api.airvisual.com/v2/city?city=' + country + '&state=' + country + '&country='+ city +'&key=LdTsKf5zgrF7qQ4Mb')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          item: json,
        })
        this.statusUpdate()
      });
   
  }

  render() {

    var { isLoaded, item, cities } = this.state;

    if (!isLoaded) {
      return <div className="background" style={{ backgroundImage: `url(${background})`}}></div>
    }
    else {
      return (
        <div style={{textAlign:'center'}}>
          <Frontpage nearestCity={this.state.item.data} handleClick={this.handleClick} status={this.state.status}/>
          <Additional handleClick={this.handleClick} country={this.state.item.data.country}/>
          <section className="backgroundstaticEnd" style={{ backgroundImage: `url(${background3})` }}></section>
        </div>

      );
    }
  }
}
