import './tasksInfo.scss';

export const TasksInfo = () => {
  return (
    <div className='tasks-info'>
      <div className="tasks-info__total">
        Total tasks <span className='tasks-info__total-num tasks-info-num'>0</span>
      </div>
      <div className="tasks-info__completed">
        Completed <span className='tasks-info__completed-num tasks-info-num'>0</span>
      </div>
    </div>
  )
}
