import {FunctionComponent} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {
    onToastClick: Function
}

const Notificiation: FunctionComponent<NotificationProps> = ({ onToastClick }) => {
    return <ToastContainer
        onClick={() => onToastClick()}
    />
}

export default Notificiation
