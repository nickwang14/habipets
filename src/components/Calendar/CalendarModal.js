import Modal from 'react-modal'
import { useState } from 'react'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
import './Calendar.css'

export default function CalendarModal() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    // let subtitle
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    // function afterOpenModal() {
    // // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00'
    // }

    function closeModal() {
        setIsOpen(false)
    }

    const [value, onChange] = useState(new Date())

    return (
        <div>
            <button className="buttonCalendar" onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Calendar'
            >
                <Calendar onChange={onChange} value={value} />
            </Modal>
        </div>
    )
}
