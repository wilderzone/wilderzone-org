export const months = {
	long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	toLong: (month: string) => months.long[months.short.indexOf(month)] ?? month,
	toShort: (month: string) => months.short[months.long.indexOf(month)] ?? month,
};

export const donations = [
	{
		year: 2026,
		categories: months.short,
		series: [
			{
				name: 'Giga',
				data: [     0,      0,      0, 171.86,  90.66,  32.71,  27.57, 231.43, 406.79, 410.86,      0,      0]
			},
			{
				name: 'Dodge',
				data: [     0,      0,      0,      0,      0,      0,      0,  84.56,      0,      0,      0,      0]
			},
		]
	},
	{
		year: 2027,
		categories: months.short,
		series: [
			{
				name: 'Giga',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
		]
	}
];

export const expenses = [
	{
		year: 2026,
		categories: months.short,
		series: [
			{
				name: 'CDN Storage',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'CDN Distribution',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Domain: llamagrab.net',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,  11.86,      0,      0]
			},
			{
				name: 'Domain: wilderzone.live',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,  25.20]
			},
			{
				name: 'Domain: wilderzone.org',
				data: [     0,      0,      0,  11.20,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Llamagrab: US Central',
				data: [     0,      0,      0,      0,      0,      0,      0,  75.02, 100.57,      0,      0,      0]
			},
			{
				name: 'Llamagrab: US West',
				data: [     0,      0,      0,  86.26,  53.90,  27.62,  23.32,  16.39,   8.40,      0,      0,      0]
			},
			{
				name: 'Llamagrab: EU',
				data: [     0,      0,      0,  74.40,  36.76,   5.09,   4.25, 105.32, 138.38,      0,      0,      0]
			},
			{
				name: 'Llamagrab: AUS',
				data: [     0,      0,      0,      0,      0,      0,      0, 119.26, 159.44, 399.00,      0,      0]
			},
			{
				name: 'Website Hosting',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
		]
	},
	{
		year: 2027,
		categories: months.short,
		series: [
			{
				name: 'CDN Storage',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'CDN Distribution',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Domain: llamagrab.net',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Domain: wilderzone.live',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Domain: wilderzone.org',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Llamagrab: US Central',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Llamagrab: US West',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Llamagrab: EU',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Llamagrab: AUS',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
			{
				name: 'Website Hosting',
				data: [     0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]
			},
		]
	}
];

export const ledger = [
	{
		date: 'October, 2026',
		content: 'Dedicated hardware purchased to reduce the ongoing cost of the AUS Llamagrab region.'
	},
	{
		date: 'August, 2026',
		content: 'Llamagrab restoration complete. Released to public access.'
	},
	{
		date: 'April, 2026',
		content: 'Work begins on restoring Llamagrab. Initial Azure resources provisioned.'
	},
];
