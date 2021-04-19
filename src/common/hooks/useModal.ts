import { useState } from "react";

const useModal = () => {
    const [opened, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return { opened, handleClose, handleOpen }
}

export default useModal
