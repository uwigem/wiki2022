export type HowItWorksItem = {
	title: string
	caption: string
	image: string
	ms?: number // milliseconds till next slide
}
export const homepageHowItWorksData: HowItWorksItem[] = [
	{
		title: 'Step 1',
		caption: 'We will express our modified MT protein within bacteria which will be used as whole cell remediators to sequester arsenic from polluted environments.',
		image: 'https://2021.igem.org/wiki/images/6/68/T--Washington--homepageHowItWorks1.png'
	},
	{
		title: 'Step 2',
		caption: 'The concentration of arsenic taken up by whole cell remediators is often a limiting factor on the efficiency of sequestration. Thus we coexpressed the MTIA gene with glpf, a protein that transports arsenic into E.coli.',
		image: 'https://2021.igem.org/wiki/images/1/13/T--Washington--homepageHowItWorks2.png'
	},
	{
		title: 'Step 3',
		caption: 'We want to regulate the expression of the MTIA and glpF genes to improve E.coli fitness. As a result, we designed our operon so that the expression of MT and glpF will be controlled by the transcription factor arsR, which represses transcription when there is no arsenic in the cell. Our drylab modelled the potential operon designs to determine their feasibility and efficiency in silico.',
		image: 'https://2021.igem.org/wiki/images/5/51/T--Washington--homepageHowItWorks3.png'
	},
	{
		title: 'Step 4',
		caption: "In our proposed solution, we plan to inoculate the root microbiome of the native plant lomatium triternatum with bacteria transformed to express our custom modified metallothionein. By expressing our system in this plant's roots, we will be able to sequester toxic arsenic from the soil in the roots of the modified plants, remediating the surrounding soil.",
		image: 'https://2021.igem.org/wiki/images/1/17/T--Washington--homepageHowItWorks4.png'
	}
]