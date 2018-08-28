import React from 'react';
import './Section.css';

const Section = (props) => {
  return (

    <div className='col-xs-12 col-sm-12 col-md-4'>
      <div className='row align-items-center'>
        <div className="col-lg-6 order-lg-1">
          <div className='p-3'>
            <img className='img-fluid rounded-circle' src={props.linkImage} alt='hello' />
          </div>
        </div>
        <div className="col-lg-6 order-lg-2">
          <div className='p-1'>
            <h2 className='display-6'>{props.h2_Content}</h2>
            <p>
              {props.p_Content}
            </p>
          </div>
          <div className='col-xs-12 text-center'>
            {!props.checkShowForm ? (
               <div className='btn btn-group'>
                 <button className='btn btn-default' onClick={props.onClickToggleSaveForm}>
                   Edit
                 </button>
                 <button className='btn btn-warning'>
                   Remove
                 </button>
               </div>
               ) : (
               <div className='btn btn-group over'>
                 <input defaultValue={props.h2_Content} type='text' onChange={props.changeText} onKeyPress={props.finishEnterText}/>
                 <button className='btn btn-danger' onClick={props.onClickToggleSaveForm}>
                   Save
                 </button>
               </div>
               )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section
