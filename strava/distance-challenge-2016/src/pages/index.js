import React, { Component } from 'react';
import Progress from '../components/Strava/Progress.js';
import './index.scss';
import Firebase from 'firebase';


/*eslint-disable */

function getQueryParams(queryString) {
  const qs = queryString.split('+').join(' ');

  const params = {};
  let tokens;
  const regex = /[?&]?([^=]+)=([^&]*)/g;

  while(tokens = regex.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {code: ''}
  }

  componentDidMount() {
    if (window && window.location.search) {
      this.setState(getQueryParams(window.location.search));
    }
  }

  componentDidUpdate() {

    if (this.state.code) {
      // const stravaGetToketUrl = `https://www.strava.com/oauth/token`;
      // let formData = new FormData();
      // formData.append('client_id', 477)
      // formData.append('client_secret', 'ab759bc6f9b469dc40c8da5b4533472b9fcc1f38');
      // formData.append('code', this.state.code);

      const crawlStatusUrl = 'https://api.apifier.com/v1/execs/4Hldw6ddeQY3WhFUm'

      $.get(crawlStatusUrl, function(data) {
        console.log(data)
      })

      // $.ajax({
      //   url: crawlStatusUrl,
      //   async: true,
      //   type: 'GET',
      //   contentType: 'application/json; charset=UTF-8',
      //   crossDomain: false
      // })
      // .done(function(response) {
      //   console.info(response)
      // })

      // fetch(crawlStatusUrl, {
    	//    method: 'GET',
      //    mode: 'no-cors',
      //    heders: {
      //      'Accept': 'application/json',
      //      'Content-Type': 'application/json'
      //    },
      //    //body: formData
      // })
      // .then(function(response) {
      //   console.info(response)
    	//   //return response.clone().json();
      // })
      // .then(function (data) {
      //   console.info(data)
      // })
      // .catch(function(err) {
      //   console.info(err)
      // });

      //console.info(stravaGetToketUrl)
    }


  }


  render() {
    // const redirectUrl = window ? window.location.href : 'http://restuta.me';
    const redirectUrl = 'http://localhost:3000';
    console.info(this.state)

    const authUrl = 'https://www.strava.com/oauth/authorize?' +
      'client_id=477' +
      '&response_type=code' +
      '&redirect_uri=' + redirectUrl +
      '&approval_prompt=auto';

    const db = new Firebase('https://incandescent-fire-7730.firebaseIO.com');

    // db.set({
    //   cat: 'Phoebe',
    //   x: 8,
    // });

    return (
      <div>
        <h1>2016 <span className="orange">STRAVA</span> Distance Challange</h1>
        <p>Anton, Helen and Sergiy decided to ride 1500km in 2016. Since Anton
          is an avid bike racer, he is challanged to ride 8x more.</p>
        <a href={authUrl}>
          <img className="connect-with-strava" src="connect-with-strava.png"></img>
        </a>
        <div>{this.state.code}</div>
        <Progress />
      </div>
    );
  }

}
