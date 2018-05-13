import Component from '@ember/component';

const myDataSource = {
    "chart": {
        "caption": "Monthly revenue",
        "subCaption": "Last Year",
        "xAxisName": "Month",
        "yAxisName": "Revenues",
        "exportEnabled": "1",
        "exportMode": "client",
        "numberPrefix": "$",
        "theme": "fint"
    },
    "data": [
        {
            "label": "Bakersfield Central",
            "value": "880000"
        },
        {
            "label": "Garden Groove harbour",
            "value": "730000"
        },
        {
            "label": "Los Angeles Topanga",
            "value": "590000"
        },
        {
            "label": "Compton-Rancho Dom",
            "value": "520000"
        },
        {
            "label": "Daly City Serramonte",
            "value": "330000"
        }
    ]
};

export default Component.extend({
    title: 'Ember FusionCharts Sample',
    width: 600,
    height: 400,
    type: 'column2d',
    dataFormat: 'json',
    dataSource: myDataSource
});
