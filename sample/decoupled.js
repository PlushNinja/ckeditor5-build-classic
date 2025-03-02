export const decoupledConfig = {
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'P',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'H1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'H2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'H3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'H4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'display1',
				view: {
					name: 'h1',
					classes: 'display-1'
				},
				title: 'D1',
				class: 'ck-heading_display1',
				converterPriority: 'high'
			},
			{
				model: 'display2',
				view: {
					name: 'h1',
					classes: 'display-2'
				},
				title: 'D2',
				class: 'ck-heading_display2',
				converterPriority: 'high'
			},
			{
				model: 'display3',
				view: {
					name: 'h1',
					classes: 'display-3'
				},
				title: 'D3',
				class: 'ck-heading_display3',
				converterPriority: 'high'
			},
			{
				model: 'display4',
				view: {
					name: 'h1',
					classes: 'display-4'
				},
				title: 'D4',
				class: 'ck-heading_display4',
				converterPriority: 'high'
			}
		]
	},
	highlight: {
		options: [
			{
				model: 'redMarker',
				class: 'text-shadow-light',
				title: 'Light shadow',
				color: '#777',
				type: 'marker'
			},
			{
				model: 'greenMarker',
				class: 'text-shadow-medium',
				title: 'Medium shadow',
				color: '#555',
				type: 'marker'
			},
			{
				model: 'blueMarker',
				class: 'text-shadow-dark',
				title: 'Dark shadow',
				color: '#333',
				type: 'marker'
			}
		]
	}
};
