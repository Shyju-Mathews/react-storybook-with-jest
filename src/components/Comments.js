import React, { useEffect, useState } from 'react'
import axios from "axios"

const Comments = () => {
    const [comments, setComments] = useState(null)

    const getComments = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        const resData = await res.data
        setComments(resData)
    }

    useEffect(() => {
      getComments()
    }, [])
    



  return (
    <div>
        <ul>
            {
               comments?.map((comment, index) => (
                <li key={index} data-testid="comment">
                    {comment.name}
                </li>
               )) 
            }
        </ul>
    </div>
  )
}

export default Comments
