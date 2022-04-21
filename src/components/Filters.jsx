import {useSelector, useDispatch} from 'react-redux'
import {selectActiveFilter} from '../store/filters/filters-selectors'
import {setFilter} from '../store/filters/filters-actions'
export const Filters = () => {
const dispatch = useDispatch();
const activeFilter = useSelector(selectActiveFilter)
return <div className='filters'>
    <button 
      className='btn'
      onClick={() => dispatch(setFilter('all'))}
      style={{backgroundColor: activeFilter === 'all' ? 'red': 'black'}}
      >all
      
    </button>

    <button 
      className='btn'
      onClick={() => dispatch(setFilter('active'))}
      style={{backgroundColor: activeFilter === 'active' ? 'red': 'black'}}
      >active
     
    </button>
    
    <button 
      className='btn'
      onClick={() => dispatch(setFilter('completed'))}
      style={{backgroundColor: activeFilter === 'completed' ? 'red': 'black'}}
      >completed
     
    </button>

  </div>
}