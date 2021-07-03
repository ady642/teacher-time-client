import React, {FC} from 'react'
import Head from 'next/head'

import {getLocalizationProps, LanguageProvider} from "@/context/LanguageContext";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import WhiteHeaderLayout from "@/common/layouts/WhiteHeaderLayout";
import useRoutePush from "@/common/hooks/useRoutePush";

import styles from '@/common/styles/WhiteHeader.module.scss'
import Draw1 from '@/modules/home/components/Draw1';
import Draw2 from '@/modules/home/components/Draw2';
import HomeButton from '@/modules/home/components/HomeButton';
import RegisterButton from '@/modules/home/components/RegisterButton';
import Draw3 from '@/modules/home/components/Draw3';
import HeadBand from "@/modules/home/components/Headband/HeadBand";

const Home: FC = ({ localization }: InferGetServerSidePropsType<typeof getServerSideProps>,) => {
	const { goTo } = useRoutePush()

	const goToTeachers = async () => {
		await goTo(localization.locale, 'teachers')
	}

	return (
		<LanguageProvider localization={localization}>
			<Head>
				<title>Teacher-time</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhiteHeaderLayout
				locale={localization.locale}
				className={`${styles.page}`}
			>
				<HeadBand goToTeachers={goToTeachers} />
				<div style={{ height: '75vh' }} className={`w-full  bg-white flew-wrap  `}>
					<section className={'overflow-hidden'} >
						<section className={'relative flex w-full place-content-between'}>
							<div style={{width:'29vw', marginLeft:'6vw', padding:'3.9vw'}} className={'h-auto'}>
								<Draw1 />
							</div>
							<div style={{width:'55vw', fontSize:'2vw', padding:'3.9vw', lineHeight:'2.4vw', marginTop:'3.6vw', marginRight:'5vw'}} className={' relative text-black font-black  justify-self-end h-auto'}>
								{ localization.translations['titreDraw1'] }
								<section style={{fontSize:'1.5vw', marginTop:'2.2vw'}} className={'text-black font-medium text-left'}>
									{ localization.translations['textDraw1'] }
									<HomeButton url={'teachers'} text={localization.translations['teacherList']} />
								</section>
							</div>
 							<div style= {{bottom:'-37%', width:'11vw',height:'11vw',left:'-4.7vw'}} className ={'animate-bounce absolute rounded-full flex items-center justify-center  bg-yellow-300'} />
						</section>
						<section style= {{marginTop:'1.8vw'}} className={'relative flex w-full place-content-between'}>
							<div style={{width:'59vw', fontSize:'2vw', padding:'3.9vw', lineHeight:'2.4vw', marginTop:'4.8vw', marginLeft:'5vw'}} className={' relative text-black font-black  justify-self-end h-auto'}>
								{ localization.translations['titreDraw2'] }
								<section style={{fontSize:'1.5vw', marginTop:'1.8vw'}} className={'text-black font-medium text-left'}>
									<div className={'flex flex-col'}>
										<span className={'flex items-center'}>
											<span>
												{ localization.translations['textDraw2a'] }
											</span>
										</span>
										<span>
											✅ { localization.translations['textDraw2b'] }
										</span>
										<span>
											💯 { localization.translations['textDraw2c'] }
										</span>
									</div>
									<HomeButton url={'room/create'} text={localization.translations.common['createRoom']} />
								</section>
							</div>
							<div style={{width:'31vw', marginRight:'6vw', padding:'3.9vw', paddingLeft:'2.9vw'}} className={'h-auto'}>
								<Draw2 />
							</div>
							<div style= {{bottom:'-10%', width:'10.5vw',height:'10.5vw',right:'-6.3vw'}} className ={'animate-bounce absolute rounded-full flex items-center justify-center bg-blueviolet'} />
						</section>
						<section style= {{marginTop:'1.8vw'}} className={'relative flex w-full place-content-between'}>
							<div style={{width:'32vw', marginLeft:'4.8vw', padding:'3.9vw', marginTop:'1vw'}} className={'h-auto'}>
								<Draw3 />
							</div>
							<div style={{width:'55vw', fontSize:'2vw', padding:'3.9vw', lineHeight:'2.4vw', marginTop:'3.6vw', marginRight:'5vw'}} className={' relative text-black font-black  justify-self-end h-auto'}>
								{ localization.translations['titreDraw3'] }
								<section style={{fontSize:'1.5vw', marginTop:'2.2vw'}} className={'text-black font-medium text-left'}>
									{ localization.translations['textDraw3'] }
									<HomeButton url={'teachers'} text={localization.translations.common['findAteacher']} />
								</section>
							</div>
							<div style= {{bottom:'-35%', width:'10.5vw',height:'10.5vw',left:'-5vw'}} className ={' animate-bounce rounded-full flex items-center justify-center absolute bg-red-400'} />
						</section>
						<section style={{ height: '68vh' }} className={`w-full  bg-white  flex `}>
							<div style={{ height: '53vh', marginTop:'8.6vh' }} className={`w-full  bg-gray-800 block object-center flex `}>
								<section className={'relative w-full flex flex-col items-center justify-center'}>
									<div style={{width:'57vw', fontSize:'2.3vw', padding:'3.2vw', lineHeight:'2.4vw'}} className={'text-yellow-300 font-black   h-auto  flex flex-col items-center justify-center'}>
										{ localization.translations['titreEnd'] }
										<section style={{fontSize:'1.5vw', marginTop:'2.5vw', marginBottom:'2vw'}} className={'text-white  font-medium text-center flex justify-between flex flex-col items-center justify-center'}>
											{ localization.translations['textEnd'] }
											<RegisterButton text={localization.translations['register']}/>
										</section>
									</div>
								</section>
							</div>
						</section>
					</section>
				</div>
			</WhiteHeaderLayout>
		</LanguageProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const localization = getLocalizationProps(ctx, "home");

	return { props: { localization } }
}

export default Home
