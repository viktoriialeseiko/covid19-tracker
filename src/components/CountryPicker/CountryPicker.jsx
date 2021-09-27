import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';
import { fetchCountries } from '../../api';

function CountryPicker({ handleCountryChange }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries()) //call function from index.js api
        }
        
        fetchAPI()
    },[setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
            <option value=''>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
