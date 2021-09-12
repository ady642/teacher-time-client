import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import { NextSeo } from 'next-seo';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<NextSeo
					title="Teacher-time.com"
					description="Tu bloques sur un exercice ? Go teacher-time.com pour trouver un professeur qui répondra à ta question en un click"
				/>
				<Head >
					<meta name="description" content="Tu bloques sur un exercice ? Go teacher-time.com pour trouver un professeur qui répondra à ta question en un click" />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-DN26ZWEN22`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							var host = window.location.hostname;
							if (host != "localhost") { // disable GA:
							  window.dataLayer = window.dataLayer || [];
							  function gtag(){dataLayer.push(arguments);}
							  gtag('js', new Date());
							
							  gtag('config', 'G-DN26ZWEN22');
							 }
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
