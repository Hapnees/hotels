import HeadModif from '@/components/HeadModif/HeadModif'
import { indexPageDescription, indexPageKeywords } from '@/data/index.data'

export default function Home() {
	return (
		<>
			<HeadModif
				description={indexPageDescription}
				keywords={indexPageKeywords}
			/>
			<main>
				<p className='test'>выфаыфва</p>
			</main>
		</>
	)
}
