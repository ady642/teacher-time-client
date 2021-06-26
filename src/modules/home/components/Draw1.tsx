import Image from "next/image";

const Draw1  = () => {
	return <>
		<section style={{marginTop:'1vw', width:'100%'}} className={' h-auto'}>
						 <Image
				src={'/img/workingstudent.png'}
				alt={'Logo'}
				width={568}
				height={513}
			/>
		</section>

	</>
}

export default Draw1
