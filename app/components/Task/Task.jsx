import './task.scss'
import Trash from '../../../public/img/trash.svg'
import Image from 'next/image'

export const Task = () => {
  return (
    <div className='task'> 
      <div className="task-check">

      </div>
      <div className="task-text">

      </div>
      <div className="task-delete">
          <Image 
            src={Trash}
            width={24}
            height={24}
            alt='Delere Task'
            className='task-delete__image'
          />
      </div>
    </div>
  )
}
