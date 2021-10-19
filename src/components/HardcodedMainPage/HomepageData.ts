export type HowItWorksItem = {
	title: string
	caption: string
	image: string
	ms?: number // milliseconds till next slide
}
export const homepageHowItWorksData: HowItWorksItem[] = [
	{
		title: 'item 1',
		caption: 'sample item caption',
		image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
	},
	{
		title: 'item 2',
		caption: 'sample item caption',
		image: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif'
	},
	{
		title: 'item 3',
		caption: 'sample item caption',
		image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg'
	},
	{
		title: 'item 4',
		caption: 'sample item caption',
		image: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	}
]