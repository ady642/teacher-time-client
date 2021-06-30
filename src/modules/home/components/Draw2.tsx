import Image from "next/image";

const Draw2  = () => {
	return <>
		<section style={{marginTop:'1vw', width:'100%'}} className={' h-auto'}>
			<Image
				src={'/img/workingwomandraw.png'}
				alt={'Logo'}
				width={612}
				height={534}
			/>
		</section>
	</>
}

export default Draw2
