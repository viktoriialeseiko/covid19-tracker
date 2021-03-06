import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData})
  }

  handleCountryChange = async (country) => {
    //fetch data
    //set the state
    const fetchedData = await fetchData(country);
    // console.log(fetchedData)
    this.setState({ data: fetchedData, country: country});
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19 TRACKER</h1>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
