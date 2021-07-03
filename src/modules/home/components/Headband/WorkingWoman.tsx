import Image from "next/image";

const WorkingWoman = () => {
	return <Image
		src={'/img/home/girl.png'}
		alt={'WorkingWoman'}
		width={800}
		height={600}
		objectFit={'contain'}
	/>
}

export default WorkingWoman
