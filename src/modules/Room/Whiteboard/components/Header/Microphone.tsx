import {FunctionComponent} from "react";
import Image from "next/image";
import {Add} from "@material-ui/icons";
import {Case, Switch} from "react-switch-case-module";

interface MicrophoneProps {
    muted: boolean;
    setMuted: (muted: boolean) => void;
}

const Microphone: FunctionComponent<MicrophoneProps> = ({ muted, setMuted }) => {
	return <>
		<Switch
			componentName={muted ? 'Unmuted' : 'Muted'}
			defaultComponent={<Add />}
		>
			<Case value={'Muted'}>
				<button onClick={() => setMuted(true)}>
					<Image width={32} height={32} className='' src="/img/icon/microphone.png" alt="microphone unmuted" />
				</button>
			</Case>
			<Case value={'Unmuted'}>
				<button onClick={() => setMuted(false)}>
					<Image width={32} height={32} className='' src="/img/icon/microphone-muted.png" alt="microphone unmuted" />
				</button>
			</Case>
		</Switch>
	</>
}

export default Microphone
