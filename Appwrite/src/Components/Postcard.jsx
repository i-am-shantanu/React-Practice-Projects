import React from 'react'
import { Link } from 'react-router-dom'
import appWriteServices from '../appwrite_files/config.js'
function Postcard({
    $id,title,featuredImage
}) {
  return (
    <Link to={`/Post/${$id}`}>
        <div
        className='w-full bg-gray-100 rounded-xl p-4'
        >
            <div className='w-full mb-4 justify-center'>
                <img src={appWriteServices.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>

        </div>
    </Link>
  )
}

export default Postcard