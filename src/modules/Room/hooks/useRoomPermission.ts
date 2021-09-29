import {useEffect} from "react";

const useRoomPermission = (callback: () => void) => {
	const displayMicrophoneMessage = () => {
		alert('Si vous n\'accepter pas les permissions vous ne pourrez parler avec votre interlocuteur')
	}

	useEffect(() => {
		navigator.permissions.query({name:'microphone'}).then(function(result) {
			result.onchange = function () {
				switch(result.state) {
				case "denied":
					displayMicrophoneMessage()
					break;
				case "granted":
					callback()
				}
			};
		});
	}, [])
}



export default useRoomPermission
