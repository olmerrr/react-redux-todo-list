import { Link, useParams } from 'react-router-dom'
// import {useSelector, useDispatch} from 'react-redux'
// import {selectActiveFilter} from '../store/filters/filters-selectors'
// import {setFilter} from '../store/filters/filters-actions'
export const Filters = () => {
  const {filter : activeFilter = 'all'} = useParams()
// const dispatch = useDispatch();
// const activeFilter = useSelector(selectActiveFilter)
return <div className='filters'>
    <Link 
      className='btn'
      style={{backgroundColor: activeFilter === 'all' ? 'red': 'black'}}
      to='/all'
      >all
      
    </Link>

    <Link 
      className='btn'
      style={{backgroundColor: activeFilter === 'active' ? 'red': 'black'}}
      to='/active'
      >active
     
    </Link>
    
    <Link 
      className='btn'
      style={{backgroundColor: activeFilter === 'completed' ? 'red': 'black'}}
      to='/completed'
      >completed
     
    </Link>

  </div>
}