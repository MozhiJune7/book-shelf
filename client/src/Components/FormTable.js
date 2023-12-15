import React from 'react'
import "../App.css"
import { MdClose } from "react-icons/md";

const FormTable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
  return (
    <div>
        <div className="addContainer">
          <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleClose}>
              <MdClose/>
            </div>
            <label htmlFor='no'>Book No:</label>
            <input
                type="number"
                id="no"
                name="no"
                value={rest.no}
                onChange={handleOnChange}
            />
            <label htmlFor="name">Book Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={rest.name}
              onChange={handleOnChange}
            />

            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={rest.author}
              onChange={handleOnChange}
            />
            <label htmlFor="email">Publications:</label>
            <input
              type="text"
              id="publications"
              name="publications"
              value={rest.publications}
              onChange={handleOnChange}
            />

            <button className="btn">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default FormTable