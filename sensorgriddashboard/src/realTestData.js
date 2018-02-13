// Test battery time series JSON
// This data is from a single sensor over a period of time
// It will be used in an XYFrame (Line graph) to show the sensors battery over time

export default {

	line: [
		{
			"time": "Thu, 18 Jan 2018 17:43:26 GMT",
			"battery": 3.4
		},
		{
			"time": "Thu, 19 Jan 2018 17:43:26 GMT",
			"battery": 3.3
		},
		{
			"time": "Thu, 20 Jan 2018 17:43:26 GMT",
			"battery": 3.2
		},
		{
			"time": "Thu, 21 Jan 2018 17:43:26 GMT",
			"battery": 3.2
		},
		{
			"time": "Thu, 22 Jan 2018 17:43:26 GMT",
			"battery": 3.0
		},
		{
			"time": "Thu, 23 Jan 2018 17:43:26 GMT",
			"battery": 2.9
		},
		{
			"time": "Thu, 24 Jan 2018 17:43:26 GMT",
			"battery": 2.8
		},
		{
			"time": "Thu, 25 Jan 2018 17:43:26 GMT",
			"battery": 2.7
		},
	],


	//Test data bar graph JSON
	//This data is from multiple sensors at a single point in time
	//It will be used in an ORFrame (Bar Graph) to show the current data readings

	bar: [
		{
			"time": "Thu, 18 Jan 2018 17:43:26 GMT",
			"sensor": "1",
			"data1": 410,
			"data2": 9
		},
		{
			"time": "Thu, 18 Jan 2018 17:43:26 GMT",
			"sensor": 2,
			"data1": 400,
			"data2": 6
		},
		{
			"time": "Thu, 18 Jan 2018 17:43:26 GMT",
			"sensor": "3",
			"data1": 390,
			"data2": 5
		},
		{
			"time": "Thu, 18 Jan 2018 17:43:26 GMT",
			"sensor": "4",
			"data1": 400,
			"data2": 8
		},
		{
			"time": "Thu, 18 Jan 2018 17:43:26 GMT",
			"sensor": "5",
			"data1": 390,
			"data2": 6
		},
	]
}


