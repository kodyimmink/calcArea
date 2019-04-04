import React, { Component } from 'react';
var area = require('area-polygon')

class AreaCalculator extends Component {
    constructor(){
        super();
        this.state = {
            area: null,
            calcDone: false,
        }
        this.calculateArea = this.calculateArea.bind(this);
        this.doCalculation = this.doCalculation.bind(this);
    }

    samplePolygons = [{
        "type": "Feature",
        "properties": {"party": "Republican"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-104.05, 48.99],
                [-97.22,  48.98],
                [-96.58,  45.94],
                [-104.03, 45.94],
                [-104.05, 48.99]
            ]]
        }
    }, {
        "type": "Feature",
        "properties": {"party": "Democrat"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-109.05, 41.00],
                [-102.06, 40.99],
                [-102.03, 36.99],
                [-109.04, 36.99],
                [-109.05, 41.00]
            ]]
        }
    }];

    calculateArea(geoJsonArray){
        const ansArray = []
        geoJsonArray.map(element => {
            ansArray.push(area(element.geometry.coordinates[0]));
            }
        )
        return ansArray;
    }

    doCalculation(){
        this.setState({
            area: this.calculateArea(this.samplePolygons),
            calcDone: true,
        })
        
    }

    render() {
        return (
            <div className="AreaCalculator">
                <button onClick= {this.doCalculation}>Calculate Area</button>
                { this.state.calcDone ? 
                <ul>
                    { this.state.area.map((element) => 
                    <li key={element.index}>
                        {element}
                    </li>
                    ) 
                    }
                </ul>
                    : ''
                }
            </div>
        );
    }
  }
  
  export default AreaCalculator;