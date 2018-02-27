// Test battery time series JSON
// This data is from a single sensor over a period of time
// It will be used in an XYFrame (Line graph) to show the sensors battery over time

export default [
	{
		id: "sensor-1", color:'blue',
		data: [
			{
				gasSensor: 200,
				created_at:  new Date(2017, 7, 1),
			},
			{
				gasSensor: 250,
				created_at:  new Date(2017, 7, 2),
			},
			{
				gasSensor: 220,
				created_at:  new Date(2017, 7, 3),
			},
			{
				gasSensor: 230,
				created_at:  new Date(2017, 7, 4),
			},
			{
				gasSensor: 240,
				created_at:  new Date(2017, 7, 5),
			}
		]

	},
	{
		id: "sensor-2", color:'red',
		data: [
			{
				gasSensor: 220,
				created_at:  new Date(2017, 7, 1),
			},
			{
				gasSensor: 300,
				created_at:  new Date(2017, 7, 2),
			},
			{
				gasSensor: 300,
				created_at:  new Date(2017, 7, 3),
			},
			{
				gasSensor: 290,
				created_at:  new Date(2017, 7, 4),
			},
			{
				gasSensor: 300,
				created_at:  new Date(2017, 7, 5),
			}
		]

	},
	{
	id: "sensor-3", color:'green',
	data: [
		{
			gasSensor: 220,
			created_at:  new Date(2017, 7, 1),
		},
		{
			gasSensor: 220,
			created_at:  new Date(2017, 7, 2),
		},
		{
			gasSensor: 220,
			created_at:  new Date(2017, 7, 3),
		},
		{
			gasSensor: 210,
			created_at:  new Date(2017, 7, 4),
		},
		{
			gasSensor: 220,
			created_at:  new Date(2017, 7, 5),
		}
	]
},

]



