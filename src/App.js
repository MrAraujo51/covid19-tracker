import React from 'react';
import './App.css';

import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'

import covidImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    };
    componentDidMount() {
        (async () => {
            const fetchedData = await fetchData();
            this.setState({data: fetchedData})
        })();
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country});
    };

    render() {
        const { data, country } = this.state;
      return (
          <div className="App">
              <img className="covid-image" src={covidImage} alt="COVID-19"/>
              <Cards data={data} />
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <Chart data={data} country={country}/>
          </div>
      );
    }
}

export default App;
