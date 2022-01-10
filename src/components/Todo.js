import {useState} from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
const Todo = (props)=>{
    const [isModalOpen,setIsModalOpen] = useState(false);
    const deleteHandler =()=>{
        setIsModalOpen(true);
    }
    const closeModalHandler=()=>{
        setIsModalOpen(false)
    }

    return <div>
        <div className="card">
            <h2>{props.text}</h2>
            <div class='actions'>
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
        {isModalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
        {isModalOpen && <Backdrop onCancel={closeModalHandler}/> }
    </div>
}

export default Todo;