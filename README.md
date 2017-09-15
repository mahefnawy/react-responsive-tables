# React Responsive Table
[![Build Status](https://travis-ci.org/adam-hanna/react-responsive-table.svg?branch=master)](https://travis-ci.org/adam-hanna/react-responsive-table) [![CodeFactor](https://www.codefactor.io/repository/github/adam-hanna/react-responsive-table/badge) (https://www.codefactor.io/repository/github/adam-hanna/react-responsive-table) [![codecov](https://codecov.io/gh/adam-hanna/react-responsive-table/branch/master/graph/badge.svg)](https://codecov.io/gh/adam-hanna/react-responsive-table)
Better responsive tables for react! For smaller screens, this library converts a standard html table into a two column table, with the header as the first column and the corresponding data in the second column.

* * *

<div style="display: inline-block; padding: 5px;"><strong>Desktop</strong><br><img src="https://i.imgur.com/HN3RbVB.gif" alt="Desktop" style="height: 300px;"/></div>
<div style="display: inline-block; padding: 5px;"><strong>Mobile</strong><br><img src="https://i.imgur.com/Ra1TJPw.gif" alt="Mobile" style="height: 300px;"/></div>
<div style="display: inline-block; padding: 5px;"><strong>Transition</strong><br><img src="https://i.imgur.com/LGQhcPb.gif" alt="Transition" style="height: 300px;"/></div>

## Usage
```shell
$ npm install --save --save-exact react-responsive-table
```

```jsx
// App.js
import React, { Component } from 'react'
import ResponsiveTable from 'react-responsive-table'

class App extends Component {
  render() {
    /*
      https://data.giss.nasa.gov/gistemp/
      Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies (Land-Ocean Temperature Index, LOTI)
      Global-mean monthly, seasonal, and annual means, 1880-present
    */
    return (
      <ResponsiveTable
        classes={{
          table: 'table' // note: using bootstrap css...
        }}
        headers={['Year','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','J-D','D-N','DJF','MAM','JJA','SON']}
        data={[
          [1880,-0.3,-0.19,-0.12,-0.2,-0.12,-0.24,-0.22,-0.1,-0.17,-0.25,-0.21,-0.24,-0.2,'***','***',-0.15,-0.19,-0.21],
          [1881,-0.16,-0.18,0.03,0.03,0.01,-0.21,-0.07,-0.03,-0.14,-0.22,-0.23,-0.12,-0.11,-0.12,-0.19,0.02,-0.1,-0.2],
          [1882,0.14,0.14,0.03,-0.19,-0.17,-0.27,-0.21,-0.06,-0.11,-0.26,-0.17,-0.25,-0.12,-0.1,0.05,-0.11,-0.18,-0.18],
          [1883,-0.32,-0.4,-0.14,-0.18,-0.21,-0.13,-0.09,-0.16,-0.21,-0.15,-0.23,-0.17,-0.2,-0.21,-0.32,-0.17,-0.13,-0.2],
          [1884,-0.16,-0.09,-0.38,-0.43,-0.37,-0.41,-0.35,-0.27,-0.28,-0.25,-0.31,-0.29,-0.3,-0.29,-0.14,-0.39,-0.35,-0.28],
          [1885,-0.59,-0.3,-0.26,-0.43,-0.43,-0.45,-0.36,-0.32,-0.24,-0.2,-0.21,-0.06,-0.32,-0.34,-0.4,-0.37,-0.38,-0.22],
          [1886,-0.43,-0.46,-0.39,-0.28,-0.27,-0.4,-0.22,-0.34,-0.26,-0.29,-0.32,-0.27,-0.33,-0.31,-0.31,-0.31,-0.32,-0.29],
          [1887,-0.73,-0.53,-0.34,-0.39,-0.33,-0.24,-0.24,-0.33,-0.23,-0.33,-0.24,-0.34,-0.36,-0.35,-0.51,-0.35,-0.27,-0.27],
          [1888,-0.38,-0.37,-0.42,-0.23,-0.23,-0.19,-0.11,-0.17,-0.11,0.01,0,-0.07,-0.19,-0.21,-0.36,-0.29,-0.16,-0.03],
          [1889,-0.12,0.17,0.07,0.06,-0.03,-0.15,-0.11,-0.21,-0.23,-0.24,-0.34,-0.31,-0.12,-0.1,-0.01,0.03,-0.16,-0.27],
          [1890,-0.45,-0.46,-0.41,-0.38,-0.47,-0.28,-0.28,-0.39,-0.4,-0.26,-0.49,-0.33,-0.38,-0.38,-0.41,-0.42,-0.32,-0.38],
          [1891,-0.43,-0.5,-0.2,-0.29,-0.2,-0.22,-0.22,-0.17,-0.16,-0.23,-0.37,-0.06,-0.25,-0.28,-0.42,-0.23,-0.2,-0.25],
          [1892,-0.3,-0.13,-0.37,-0.36,-0.26,-0.25,-0.34,-0.26,-0.14,-0.14,-0.43,-0.4,-0.28,-0.25,-0.16,-0.33,-0.28,-0.24],
          [1893,-0.81,-0.56,-0.24,-0.31,-0.37,-0.29,-0.18,-0.28,-0.22,-0.18,-0.18,-0.36,-0.33,-0.34,-0.59,-0.31,-0.25,-0.19],
          [1894,-0.55,-0.35,-0.26,-0.49,-0.36,-0.45,-0.27,-0.23,-0.26,-0.22,-0.26,-0.21,-0.33,-0.34,-0.42,-0.37,-0.32,-0.25],
          [1895,-0.45,-0.44,-0.29,-0.26,-0.28,-0.25,-0.19,-0.17,-0.1,-0.09,-0.16,-0.17,-0.24,-0.24,-0.37,-0.28,-0.2,-0.12],
          [1896,-0.27,-0.16,-0.27,-0.31,-0.19,-0.15,-0.05,-0.05,-0.05,0.1,-0.09,-0.05,-0.13,-0.14,-0.2,-0.26,-0.09,-0.01],
          [1897,-0.16,-0.16,-0.15,-0.04,-0.06,-0.17,-0.08,-0.12,-0.09,-0.14,-0.2,-0.2,-0.13,-0.12,-0.12,-0.08,-0.13,-0.15],
          [1898,-0.04,-0.3,-0.52,-0.34,-0.33,-0.22,-0.25,-0.27,-0.23,-0.35,-0.4,-0.26,-0.29,-0.29,-0.18,-0.4,-0.25,-0.33],
          [1899,-0.2,-0.42,-0.35,-0.22,-0.25,-0.34,-0.19,-0.08,-0.04,-0.06,0.1,-0.3,-0.2,-0.19,-0.29,-0.27,-0.21,0],
          [1900,-0.38,-0.04,0,-0.13,-0.11,-0.14,-0.14,-0.12,-0.06,0.07,-0.11,-0.08,-0.1,-0.12,-0.24,-0.08,-0.13,-0.03],
          [1901,-0.24,-0.05,0.08,-0.05,-0.17,-0.14,-0.17,-0.22,-0.23,-0.31,-0.17,-0.28,-0.16,-0.15,-0.12,-0.05,-0.17,-0.24],
          [1902,-0.19,-0.03,-0.29,-0.3,-0.35,-0.35,-0.3,-0.33,-0.29,-0.31,-0.39,-0.46,-0.3,-0.28,-0.17,-0.31,-0.33,-0.33],
          [1903,-0.25,-0.04,-0.24,-0.42,-0.44,-0.47,-0.38,-0.49,-0.5,-0.5,-0.45,-0.52,-0.39,-0.38,-0.25,-0.36,-0.44,-0.48],
          [1904,-0.68,-0.58,-0.5,-0.55,-0.57,-0.52,-0.55,-0.51,-0.54,-0.41,-0.22,-0.36,-0.5,-0.51,-0.59,-0.54,-0.53,-0.39],
          [1905,-0.4,-0.6,-0.24,-0.37,-0.34,-0.32,-0.31,-0.23,-0.2,-0.27,-0.11,-0.19,-0.3,-0.31,-0.45,-0.32,-0.29,-0.19],
          [1906,-0.29,-0.32,-0.18,-0.05,-0.26,-0.22,-0.27,-0.21,-0.28,-0.21,-0.4,-0.17,-0.24,-0.24,-0.27,-0.16,-0.23,-0.29],
          [1907,-0.42,-0.53,-0.27,-0.39,-0.48,-0.45,-0.38,-0.36,-0.34,-0.26,-0.5,-0.49,-0.41,-0.38,-0.37,-0.38,-0.4,-0.37],
          [1908,-0.44,-0.32,-0.55,-0.46,-0.42,-0.43,-0.41,-0.48,-0.37,-0.47,-0.51,-0.51,-0.45,-0.45,-0.42,-0.48,-0.44,-0.45],
          [1909,-0.7,-0.48,-0.52,-0.61,-0.57,-0.54,-0.46,-0.32,-0.37,-0.38,-0.32,-0.56,-0.49,-0.48,-0.56,-0.57,-0.44,-0.36],
          [1910,-0.45,-0.45,-0.52,-0.42,-0.36,-0.39,-0.36,-0.37,-0.37,-0.39,-0.54,-0.67,-0.44,-0.43,-0.49,-0.43,-0.37,-0.44],
          [1911,-0.64,-0.58,-0.6,-0.54,-0.52,-0.48,-0.41,-0.42,-0.38,-0.23,-0.18,-0.23,-0.43,-0.47,-0.63,-0.55,-0.44,-0.26],
          [1912,-0.27,-0.13,-0.36,-0.2,-0.23,-0.27,-0.45,-0.56,-0.52,-0.58,-0.39,-0.45,-0.37,-0.35,-0.21,-0.26,-0.43,-0.5],
          [1913,-0.42,-0.44,-0.44,-0.4,-0.48,-0.49,-0.37,-0.35,-0.37,-0.35,-0.2,-0.05,-0.36,-0.4,-0.44,-0.44,-0.41,-0.31],
          [1914,0.03,-0.12,-0.23,-0.3,-0.24,-0.28,-0.25,-0.15,-0.14,-0.05,-0.19,-0.09,-0.17,-0.16,-0.04,-0.26,-0.23,-0.13],
          [1915,-0.18,-0.01,-0.11,0.05,-0.07,-0.22,-0.11,-0.21,-0.18,-0.26,-0.13,-0.17,-0.13,-0.13,-0.09,-0.04,-0.18,-0.19],
          [1916,-0.09,-0.13,-0.29,-0.31,-0.33,-0.47,-0.37,-0.26,-0.32,-0.28,-0.4,-0.81,-0.34,-0.29,-0.13,-0.31,-0.37,-0.33],
          [1917,-0.59,-0.62,-0.61,-0.51,-0.56,-0.44,-0.26,-0.22,-0.18,-0.41,-0.29,-0.68,-0.45,-0.46,-0.67,-0.56,-0.31,-0.29],
          [1918,-0.43,-0.32,-0.25,-0.45,-0.46,-0.36,-0.32,-0.31,-0.16,-0.06,-0.11,-0.28,-0.29,-0.33,-0.48,-0.39,-0.33,-0.11],
          [1919,-0.21,-0.24,-0.21,-0.13,-0.29,-0.38,-0.3,-0.33,-0.23,-0.2,-0.42,-0.42,-0.28,-0.27,-0.24,-0.21,-0.34,-0.28],
          [1920,-0.23,-0.23,-0.09,-0.26,-0.27,-0.37,-0.32,-0.25,-0.2,-0.27,-0.27,-0.45,-0.27,-0.27,-0.3,-0.21,-0.31,-0.25],
          [1921,-0.03,-0.2,-0.23,-0.3,-0.29,-0.28,-0.15,-0.24,-0.18,-0.04,-0.13,-0.17,-0.19,-0.21,-0.22,-0.28,-0.23,-0.12],
          [1922,-0.34,-0.44,-0.13,-0.24,-0.34,-0.33,-0.25,-0.31,-0.32,-0.33,-0.14,-0.19,-0.28,-0.28,-0.32,-0.24,-0.3,-0.26],
          [1923,-0.29,-0.37,-0.34,-0.4,-0.35,-0.26,-0.3,-0.3,-0.28,-0.12,0,-0.03,-0.25,-0.27,-0.28,-0.36,-0.29,-0.13],
          [1924,-0.23,-0.24,-0.08,-0.32,-0.19,-0.24,-0.27,-0.34,-0.31,-0.34,-0.2,-0.42,-0.26,-0.23,-0.17,-0.2,-0.28,-0.28],
          [1925,-0.38,-0.39,-0.25,-0.26,-0.31,-0.34,-0.29,-0.16,-0.17,-0.19,0.03,0.08,-0.22,-0.26,-0.4,-0.27,-0.26,-0.11],
          [1926,0.19,0.05,0.1,-0.13,-0.23,-0.23,-0.25,-0.14,-0.13,-0.11,-0.06,-0.29,-0.1,-0.07,0.1,-0.08,-0.21,-0.1],
          [1927,-0.28,-0.19,-0.37,-0.31,-0.26,-0.27,-0.17,-0.21,-0.11,-0.02,-0.04,-0.34,-0.21,-0.21,-0.25,-0.31,-0.22,-0.06],
          [1928,-0.01,-0.09,-0.28,-0.28,-0.31,-0.38,-0.19,-0.22,-0.19,-0.18,-0.1,-0.18,-0.2,-0.21,-0.15,-0.29,-0.27,-0.16],
          [1929,-0.47,-0.6,-0.32,-0.4,-0.39,-0.41,-0.34,-0.3,-0.23,-0.14,-0.13,-0.55,-0.36,-0.33,-0.42,-0.37,-0.35,-0.16],
          [1930,-0.3,-0.28,-0.09,-0.25,-0.24,-0.21,-0.2,-0.13,-0.12,-0.1,0.15,-0.07,-0.15,-0.19,-0.38,-0.19,-0.18,-0.03],
          [1931,-0.1,-0.25,-0.08,-0.22,-0.2,-0.08,-0.03,-0.03,-0.07,0.01,-0.12,-0.1,-0.11,-0.1,-0.14,-0.17,-0.05,-0.06],
          [1932,0.14,-0.19,-0.2,-0.07,-0.19,-0.3,-0.24,-0.23,-0.11,-0.11,-0.27,-0.26,-0.17,-0.15,-0.05,-0.15,-0.26,-0.16],
          [1933,-0.34,-0.34,-0.3,-0.26,-0.3,-0.34,-0.22,-0.25,-0.27,-0.21,-0.3,-0.46,-0.3,-0.28,-0.31,-0.29,-0.27,-0.26],
          [1934,-0.25,-0.04,-0.33,-0.3,-0.11,-0.16,-0.1,-0.11,-0.16,-0.09,0.03,-0.04,-0.14,-0.17,-0.25,-0.25,-0.12,-0.07],
          [1935,-0.34,0.14,-0.13,-0.36,-0.31,-0.27,-0.23,-0.23,-0.21,-0.09,-0.28,-0.2,-0.21,-0.2,-0.08,-0.27,-0.24,-0.19],
          [1936,-0.29,-0.39,-0.23,-0.21,-0.18,-0.21,-0.08,-0.14,-0.1,-0.05,-0.04,-0.03,-0.16,-0.18,-0.29,-0.2,-0.15,-0.06],
          [1937,-0.14,0.03,-0.19,-0.17,-0.08,-0.06,-0.05,0.01,0.11,0.08,0.09,-0.12,-0.04,-0.03,-0.05,-0.15,-0.03,0.09],
          [1938,0.01,-0.02,0.08,0.04,-0.11,-0.18,-0.1,-0.06,0.02,0.1,0.03,-0.23,-0.04,-0.03,-0.04,0,-0.11,0.05],
          [1939,-0.07,-0.09,-0.2,-0.1,-0.06,-0.09,-0.08,-0.07,-0.07,-0.04,0.05,0.44,-0.03,-0.09,-0.13,-0.12,-0.08,-0.02],
          [1940,-0.06,0.12,0.15,0.18,0.09,0.08,0.12,0.04,0.13,0.07,0.16,0.27,0.11,0.13,0.16,0.14,0.08,0.12],
          [1941,0.2,0.31,0.07,0.17,0.14,0.11,0.21,0.13,0.01,0.33,0.23,0.2,0.18,0.18,0.26,0.13,0.15,0.19],
          [1942,0.25,0.01,0.09,0.1,0.08,0.04,-0.01,-0.04,-0.05,-0.02,0.07,0.06,0.05,0.06,0.15,0.09,0,0],
          [1943,-0.04,0.13,-0.08,0.07,0.04,-0.07,0.08,0,0.05,0.21,0.19,0.24,0.07,0.05,0.05,0.01,0,0.15],
          [1944,0.35,0.26,0.26,0.19,0.19,0.19,0.18,0.17,0.3,0.25,0.09,0.02,0.2,0.22,0.28,0.21,0.18,0.21],
          [1945,0.09,-0.02,0.06,0.18,0.04,-0.01,0.02,0.26,0.22,0.18,0.07,-0.09,0.08,0.09,0.03,0.09,0.09,0.16],
          [1946,0.15,0.07,0,0.06,-0.09,-0.22,-0.14,-0.17,-0.07,-0.06,-0.06,-0.35,-0.07,-0.05,0.04,-0.01,-0.17,-0.06],
          [1947,-0.12,-0.08,0.07,0.07,-0.03,0.02,-0.08,-0.09,-0.13,0.05,0.02,-0.16,-0.04,-0.06,-0.19,0.03,-0.05,-0.02],
          [1948,0.07,-0.16,-0.26,-0.11,0.01,-0.05,-0.11,-0.13,-0.12,-0.07,-0.12,-0.23,-0.11,-0.1,-0.08,-0.12,-0.1,-0.1],
          [1949,0.09,-0.17,-0.03,-0.1,-0.08,-0.23,-0.14,-0.12,-0.14,-0.07,-0.1,-0.23,-0.11,-0.11,-0.1,-0.07,-0.16,-0.1],
          [1950,-0.33,-0.28,-0.07,-0.2,-0.1,-0.03,-0.1,-0.17,-0.12,-0.22,-0.38,-0.2,-0.18,-0.19,-0.28,-0.12,-0.1,-0.24],
          [1951,-0.35,-0.43,-0.21,-0.13,0,-0.02,0.03,0.06,0.09,0.05,-0.02,0.14,-0.06,-0.09,-0.32,-0.11,0.02,0.04],
          [1952,0.13,0.11,-0.09,0.02,-0.02,-0.04,0.04,0.04,0.08,-0.01,-0.14,-0.01,0.01,0.02,0.13,-0.03,0.02,-0.02],
          [1953,0.08,0.14,0.11,0.18,0.09,0.1,0,0.06,0.05,0.06,-0.05,0.03,0.07,0.07,0.07,0.13,0.06,0.02],
          [1954,-0.27,-0.12,-0.15,-0.16,-0.21,-0.17,-0.19,-0.16,-0.09,-0.04,0.06,-0.21,-0.14,-0.12,-0.12,-0.17,-0.17,-0.03],
          [1955,0.14,-0.18,-0.34,-0.21,-0.2,-0.11,-0.13,0.01,-0.11,-0.05,-0.24,-0.3,-0.14,-0.14,-0.08,-0.25,-0.08,-0.13],
          [1956,-0.16,-0.26,-0.23,-0.27,-0.31,-0.16,-0.12,-0.26,-0.2,-0.24,-0.17,-0.07,-0.2,-0.22,-0.24,-0.27,-0.18,-0.2],
          [1957,-0.11,-0.04,-0.06,-0.01,0.09,0.16,0.01,0.15,0.09,0.02,0.07,0.16,0.05,0.03,-0.07,0.01,0.11,0.06],
          [1958,0.39,0.24,0.11,0.03,0.07,-0.07,0.05,-0.03,-0.02,0.04,0.02,0.01,0.07,0.08,0.27,0.07,-0.02,0.02],
          [1959,0.08,0.09,0.18,0.13,0.04,0.02,0.06,-0.02,-0.06,-0.09,-0.09,-0.01,0.03,0.03,0.06,0.12,0.02,-0.08],
          [1960,-0.01,0.16,-0.34,-0.14,-0.07,-0.04,-0.03,0.02,0.07,0.07,-0.12,0.18,-0.02,-0.04,0.05,-0.18,-0.02,0.01],
          [1961,0.07,0.19,0.09,0.12,0.11,0.11,0,0.03,0.07,0,0.03,-0.15,0.05,0.08,0.15,0.11,0.05,0.03],
          [1962,0.07,0.14,0.12,0.04,-0.04,0.04,0.02,-0.01,0.01,0,0.07,0,0.04,0.03,0.02,0.04,0.02,0.03],
          [1963,-0.02,0.2,-0.14,-0.06,-0.04,0.05,0.08,0.27,0.2,0.15,0.15,-0.01,0.07,0.07,0.06,-0.08,0.13,0.17],
          [1964,-0.08,-0.13,-0.23,-0.32,-0.25,-0.02,-0.03,-0.21,-0.29,-0.31,-0.21,-0.3,-0.2,-0.17,-0.07,-0.27,-0.09,-0.27],
          [1965,-0.08,-0.17,-0.11,-0.19,-0.14,-0.09,-0.12,-0.03,-0.16,-0.05,-0.07,-0.06,-0.11,-0.12,-0.18,-0.14,-0.08,-0.09],
          [1966,-0.17,-0.01,0.05,-0.13,-0.11,0.01,0.09,-0.08,-0.02,-0.15,-0.02,-0.05,-0.05,-0.05,-0.08,-0.06,0.01,-0.06],
          [1967,-0.06,-0.21,0.04,-0.05,0.15,-0.08,0.01,0.01,-0.06,0.09,-0.07,-0.03,-0.02,-0.02,-0.11,0.05,-0.02,-0.01],
          [1968,-0.25,-0.15,0.21,-0.06,-0.13,-0.08,-0.12,-0.09,-0.18,0.11,-0.03,-0.13,-0.08,-0.07,-0.15,0.01,-0.09,-0.04],
          [1969,-0.11,-0.14,0.01,0.18,0.19,0.05,-0.02,0.03,0.09,0.13,0.13,0.28,0.07,0.03,-0.12,0.13,0.02,0.11],
          [1970,0.09,0.22,0.08,0.09,-0.04,-0.02,-0.02,-0.09,0.11,0.06,0.02,-0.12,0.03,0.07,0.2,0.04,-0.04,0.06],
          [1971,-0.02,-0.19,-0.17,-0.08,-0.05,-0.19,-0.11,-0.03,-0.04,-0.06,-0.05,-0.09,-0.09,-0.09,-0.11,-0.1,-0.11,-0.05],
          [1972,-0.24,-0.17,0.02,0,-0.04,0.06,0.01,0.17,0.02,0.09,0.04,0.19,0.01,-0.01,-0.17,0,0.08,0.05],
          [1973,0.29,0.31,0.27,0.26,0.25,0.17,0.1,0.03,0.09,0.14,0.06,-0.06,0.16,0.18,0.26,0.26,0.1,0.1],
          [1974,-0.15,-0.29,-0.06,-0.12,-0.02,-0.07,-0.05,0.11,-0.12,-0.08,-0.07,-0.09,-0.08,-0.08,-0.17,-0.07,0,-0.09],
          [1975,0.07,0.06,0.13,0.05,0.16,0,-0.01,-0.19,-0.03,-0.09,-0.16,-0.17,-0.02,-0.01,0.01,0.11,-0.07,-0.09],
          [1976,-0.01,-0.06,-0.21,-0.08,-0.24,-0.16,-0.1,-0.14,-0.09,-0.26,-0.04,0.1,-0.11,-0.13,-0.08,-0.18,-0.13,-0.13],
          [1977,0.2,0.22,0.25,0.27,0.3,0.24,0.2,0.16,0,0.02,0.17,0.03,0.17,0.18,0.17,0.27,0.2,0.06],
          [1978,0.06,0.14,0.21,0.15,0.06,-0.02,0.03,-0.18,0.05,0,0.15,0.1,0.06,0.06,0.07,0.14,-0.06,0.07],
          [1979,0.12,-0.11,0.18,0.13,0.05,0.13,0.02,0.13,0.25,0.24,0.28,0.47,0.16,0.13,0.04,0.12,0.1,0.26],
          [1980,0.3,0.43,0.3,0.33,0.35,0.17,0.28,0.23,0.19,0.18,0.29,0.19,0.27,0.29,0.4,0.33,0.23,0.22],
          [1981,0.55,0.41,0.49,0.31,0.24,0.31,0.34,0.32,0.16,0.13,0.24,0.43,0.33,0.31,0.38,0.35,0.32,0.18],
          [1982,0.1,0.16,-0.01,0.09,0.16,0.05,0.13,0.07,0.14,0.13,0.15,0.43,0.13,0.13,0.23,0.08,0.08,0.14],
          [1983,0.52,0.4,0.42,0.31,0.36,0.2,0.17,0.33,0.39,0.16,0.32,0.17,0.31,0.34,0.45,0.36,0.23,0.29],
          [1984,0.3,0.17,0.29,0.08,0.33,0.05,0.17,0.16,0.21,0.16,0.06,-0.05,0.16,0.18,0.21,0.24,0.13,0.14],
          [1985,0.22,-0.06,0.17,0.11,0.17,0.18,-0.01,0.15,0.15,0.12,0.09,0.15,0.12,0.1,0.04,0.15,0.11,0.12],
          [1986,0.29,0.38,0.28,0.24,0.24,0.11,0.11,0.12,0,0.14,0.11,0.16,0.18,0.18,0.27,0.25,0.11,0.08],
          [1987,0.36,0.45,0.16,0.23,0.25,0.37,0.45,0.28,0.39,0.31,0.25,0.48,0.33,0.31,0.32,0.21,0.37,0.32],
          [1988,0.57,0.43,0.51,0.45,0.43,0.43,0.35,0.47,0.41,0.4,0.12,0.33,0.41,0.42,0.49,0.47,0.41,0.31],
          [1989,0.15,0.35,0.36,0.33,0.16,0.14,0.33,0.37,0.37,0.32,0.2,0.38,0.29,0.28,0.27,0.29,0.28,0.3],
          [1990,0.4,0.41,0.76,0.55,0.46,0.38,0.43,0.3,0.29,0.42,0.45,0.4,0.44,0.44,0.4,0.59,0.37,0.39],
          [1991,0.4,0.49,0.35,0.52,0.38,0.52,0.47,0.39,0.48,0.3,0.31,0.32,0.41,0.42,0.43,0.41,0.46,0.36],
          [1992,0.44,0.41,0.47,0.24,0.32,0.25,0.12,0.07,-0.01,0.08,0.02,0.21,0.22,0.23,0.39,0.34,0.15,0.03],
          [1993,0.37,0.38,0.36,0.27,0.27,0.26,0.28,0.13,0.1,0.22,0.07,0.17,0.24,0.24,0.32,0.3,0.22,0.13],
          [1994,0.27,0.02,0.27,0.4,0.28,0.42,0.31,0.21,0.29,0.41,0.46,0.36,0.31,0.29,0.15,0.32,0.31,0.39],
          [1995,0.5,0.78,0.45,0.47,0.26,0.42,0.47,0.46,0.32,0.47,0.45,0.28,0.44,0.45,0.55,0.4,0.45,0.42],
          [1996,0.25,0.48,0.32,0.36,0.27,0.26,0.35,0.48,0.25,0.18,0.4,0.4,0.33,0.32,0.34,0.31,0.36,0.28],
          [1997,0.31,0.37,0.53,0.36,0.36,0.54,0.35,0.41,0.53,0.62,0.64,0.58,0.47,0.45,0.36,0.42,0.43,0.6],
          [1998,0.59,0.89,0.63,0.63,0.69,0.78,0.68,0.65,0.41,0.44,0.49,0.55,0.62,0.62,0.69,0.65,0.7,0.44],
          [1999,0.47,0.65,0.34,0.33,0.31,0.36,0.38,0.31,0.4,0.39,0.38,0.43,0.4,0.41,0.56,0.33,0.35,0.39],
          [2000,0.23,0.56,0.57,0.57,0.36,0.41,0.39,0.42,0.39,0.28,0.32,0.29,0.4,0.41,0.41,0.5,0.41,0.33],
          [2001,0.41,0.44,0.56,0.51,0.57,0.54,0.6,0.48,0.54,0.5,0.69,0.55,0.53,0.51,0.38,0.54,0.54,0.58],
          [2002,0.75,0.75,0.9,0.57,0.63,0.54,0.61,0.53,0.62,0.55,0.58,0.44,0.62,0.63,0.68,0.7,0.56,0.58],
          [2003,0.73,0.55,0.57,0.54,0.61,0.48,0.54,0.66,0.64,0.74,0.53,0.74,0.61,0.58,0.57,0.57,0.56,0.63],
          [2004,0.58,0.72,0.64,0.62,0.4,0.44,0.24,0.44,0.51,0.64,0.71,0.48,0.53,0.56,0.68,0.55,0.37,0.62],
          [2005,0.7,0.55,0.71,0.68,0.63,0.66,0.65,0.61,0.75,0.76,0.73,0.66,0.67,0.66,0.58,0.68,0.64,0.75],
          [2006,0.56,0.69,0.62,0.49,0.46,0.64,0.53,0.7,0.62,0.66,0.7,0.74,0.62,0.61,0.64,0.52,0.62,0.66],
          [2007,0.95,0.7,0.7,0.75,0.66,0.58,0.61,0.58,0.61,0.57,0.55,0.47,0.64,0.66,0.8,0.7,0.59,0.58],
          [2008,0.23,0.34,0.73,0.51,0.47,0.46,0.58,0.43,0.63,0.63,0.65,0.53,0.52,0.51,0.34,0.57,0.49,0.64],
          [2009,0.61,0.5,0.52,0.59,0.64,0.64,0.71,0.66,0.69,0.64,0.76,0.65,0.64,0.62,0.55,0.58,0.67,0.7],
          [2010,0.73,0.8,0.92,0.84,0.73,0.62,0.59,0.63,0.59,0.69,0.77,0.46,0.7,0.71,0.73,0.83,0.61,0.68],
          [2011,0.48,0.51,0.62,0.62,0.5,0.57,0.71,0.71,0.54,0.63,0.55,0.53,0.58,0.58,0.48,0.58,0.66,0.57],
          [2012,0.45,0.47,0.56,0.68,0.74,0.62,0.54,0.61,0.72,0.75,0.73,0.52,0.62,0.62,0.48,0.66,0.59,0.74],
          [2013,0.66,0.55,0.66,0.52,0.58,0.64,0.57,0.66,0.77,0.67,0.78,0.65,0.64,0.63,0.58,0.59,0.63,0.74],
          [2014,0.73,0.52,0.76,0.78,0.85,0.66,0.56,0.81,0.88,0.82,0.66,0.78,0.73,0.72,0.63,0.8,0.68,0.78],
          [2015,0.81,0.87,0.9,0.74,0.76,0.78,0.71,0.79,0.82,1.07,1.05,1.12,0.87,0.84,0.82,0.8,0.76,0.98],
          [2016,1.18,1.35,1.32,1.09,0.92,0.78,0.82,0.99,0.87,0.89,0.9,0.84,1,1.02,1.22,1.11,0.86,0.89],
          [2017,0.98,1.13,1.14,0.94,0.89,0.68,0.83,'***','***','***','***','***','***','***',0.98,0.99,'***','***']
        ]}
      />
    )
  }
}

export default App
```

## Prop Types
```js
{
  // breakpoint: window.innerWidth at which the table switches to the smaller, mobile version
  breakpoint: PropTypes.number,

  // classes: class strings to apply to the various html elements
  classes: PropTypes.shape({
    table: PropTypes.string,
    thead: PropTypes.string, // note: thead is not present in the smaller, mobile table
    th: PropTypes.string,
    tbody: PropTypes.string, // note: tbody encapsulates each 'row of data' in the smaller, mobile table
    tr: PropTypes.string,
    td: PropTypes.string,
    mobileSpacerRow:  PropTypes.shape({
      tr: PropTypes.string,
      td: PropTypes.string
    })
  }),

  // styles: style objects to apply to the various html elements
  styles: PropTypes.shape({
    table: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    thead: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])), // note: thead is not present in the smaller, mobile table
    th: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    tbody: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])), // note: tbody encapsulates each 'row of data' in the smaller, mobile table
    tr: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    td: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    mobileSpacerRow:  PropTypes.shape({
      tr: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
      td: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number]))
    })
  }),

  // headers: array of table headers
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.symbol
    ])
  ),

  // data: array of arrays of table data
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.symbol
      ])
    )
  ),

  // hasMobileSpacerRow: should the last row in the mobile table be blank to provide some padding?
  hasMobileSpacerRow: PropTypes.bool
}
```

## Default Props
```js
{
  breakpoint: 480, // px
  classes: {
    table: '',
    thead: '',
    th: '',
    tbody: '',
    tr: '',
    td: '',
    mobileSpacerRow: {
      tr: '',
      td: ''
    }
  },
  styles: {
    table: {},
    thead: {},
    th: {},
    tbody: {},
    tr: {},
    td: {},
    mobileSpacerRow: {
      tr: {},
      td: {}
    }
  },
  headers: [],
  data: [[]],
  hasMobileSpacerRow: true
}
```
