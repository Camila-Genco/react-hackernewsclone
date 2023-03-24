import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlePageAction } from '../actions/newsActions';

const Buttons = () => {
    const {page, nbPages} = useSelector(store => store.news);
    const dispatch = useDispatch();
  return (
    <div>
      <div className='buttons'>
        <button className='btn-prev' onClick={() => dispatch(handlePageAction("dec"))}>Prev</button>
        <span>{page +1} of {nbPages}</span>
        <button className='btn-next' onClick={() => dispatch(handlePageAction("inc"))}>Next</button>
    </div>
    </div>
  )
}

export default Buttons
