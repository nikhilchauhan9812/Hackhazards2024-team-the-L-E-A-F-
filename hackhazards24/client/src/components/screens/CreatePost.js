import React from 'react'

function CreatePost() {
  return (
  <div>

    <input type="text" placeholder='Give title For The Post' />
    <textarea type="text" placeholder='Description about your Post' />
  
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file" />
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" />
      </div>
    </div>
  </div>

  )
}

export default CreatePost