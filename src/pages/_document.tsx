import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head >
					<title>Teacher Time</title>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							  window.dataLayer = window.dataLayer || [];
							  function gtag(){dataLayer.push(arguments);}
							  gtag('js', new Date());
							
							  gtag('config', 'G-DN26ZWEN22');
							`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
