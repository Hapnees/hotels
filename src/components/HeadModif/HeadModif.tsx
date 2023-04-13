import Head from 'next/head'
import { FC } from 'react'

interface IProps {
	title?: string
	description?: string
	keywords?: string
	noIndex?: boolean
}

const HeadModif: FC<IProps> = ({
	title,
	description,
	noIndex: isNoIndex,
	keywords,
}) => {
	const defaultTitle =
		'Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве'

	return (
		<Head>
			<title>{defaultTitle || title}</title>
			{isNoIndex ? (
				<meta name='robots' content='noindex,nofollow' />
			) : (
				<>
					{description && (
						<>
							<meta name='description' content={description} />
							<meta name='og:description' content={description} />
						</>
					)}
					{keywords && <meta name='keywords' content={keywords} />}
				</>
			)}
		</Head>
	)
}

export default HeadModif
