import './taskList.scss';
import { Task } from '../Task/Task'
import Image from 'next/image'
import Clipboard from '../../../public/img/Clipboard.png'

export const TaskList = () => {
  return (
    <div className='task-list'>
      {/* <div className='task-list-base'>
        <Image
            src={Clipboard}
            width={56}
            height={56}
            alt="Create Task"
            className='task-list-image'
          />
          <div className="task-list__text">
            <span>You don't have any tasks registered yet</span>
            Create tasks and organize your to-do items
          </div>
      </div> */}
      <Task />
    </div>
  )
}
