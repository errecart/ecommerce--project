import React from 'react'

export default function Form(){
  return (
    <>
        <h2>Your Cart</h2>
        <form>
            <div className="mb-3">
                <label className="form-label">Complete Name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Cell-Phone</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" required max={14}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" required/>
            </div>
        </form>
    </>
  )
}

