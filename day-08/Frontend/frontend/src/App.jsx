import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {

  const [notes, setnotes] = useState([])
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [editId, setEditId] = useState(null)


  function submitHandler(e) {
    e.preventDefault()

    if (!titleValue || !descriptionValue) return alert('Please fill all the fields')


    if (editId) {
      axios.patch(`http://localhost:3000/api/notes/${editId}`, {
        description: descriptionValue
      }).then(res => {
        console.log(res.data.message)
        fetichingNotes()
        setTitleValue('')
        setDescriptionValue('')
        setEditId(null)
      })
    } else {
      axios.post('http://localhost:3000/api/notes', {
        title: titleValue,
        description: descriptionValue
      }).then(res => {
        console.log(res.data.message)
        fetichingNotes()
        setTitleValue('')
        setDescriptionValue('')
      })
    }
  }

  function deleteHandler(elemId) {
    axios.delete(`http://localhost:3000/api/notes/${elemId}`)
      .then(res => {
        console.log(res.data.message);
        fetichingNotes()
      })
  }

  function editHandler(note) {
    setTitleValue(note.title)
    setDescriptionValue(note.description)
    setEditId(note._id)
  }


  function fetichingNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then(res => {
        setnotes(res.data.notes)
      })
  }


  useEffect(() => {
    fetichingNotes()
  }, [])



  return (
    <>
      <form className='note-create' onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='Enter Title'
          value={titleValue} onChange={(e) => setTitleValue(e.target.value)}
        />
        <input
          type="text"
          placeholder='Enter Description'
          value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)} />
        <button type="submit">
          {editId ? 'Update Note' : 'Create Note'}
        </button>
      </form>

      <div className="notes">
        {
          notes.map((note, idx) => {
            return <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className="buttons">
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </button>
                <button
                  className="edit-btn"
                  onClick={() => editHandler(note)}
                >
                  Edit
                </button>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
