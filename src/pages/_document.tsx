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
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-DN26ZWEN22`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							if (localhost) { // disable GA:
							  window['ga-disable-UA-XXXXX-Y'] = true; // enter your tracking ID
							}
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
