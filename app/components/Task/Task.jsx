import './task.scss'
import Trash from '../../../public/img/trash.svg'
import Check from '../../../public/img/check.svg'
import Image from 'next/image'

export const Task = () => {
  return (
    // task-complete
    <div className='task '> 
      <div className="task-check">
        <span>
          <div className="task-check__complete">
            <Image 
              src={Check} 
              alt="Complete"
              width={24}
              height={24}
            />
            </div>
        </span>
      </div>
      <div className="task-text">
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
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
