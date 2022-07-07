import React from 'react'
import env from 'env'
// import "./styles.css";

export const TodoItemSaaS = ({ id, item, refetch }) => {
  const handleDelete = (e) => {
    e.preventDefault()
    const idToRemove = e.target.value.trim()

    fetch(`${env.BLOX_FUNCTION_URL}/removeTodoSaaS`, {
      method: 'delete',
      body: JSON.stringify({ id: idToRemove }),
    })
      .then((res) => res.json())
      .then(({ status }) => {
        console.log(status)
        refetch(true)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div id={id} className="todo-item">
        <div>
          <p>{item}</p>
        </div>
        <div>
          <button value={id} onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoItemSaaS
