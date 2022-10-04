import React, { useState } from 'react'
import axios from 'axios'

const Dog = ({dogBreed}) => {

    const DOG_RANDOM_IMAGE = `https://dog.ceo/api/breed/${dogBreed}/images/random`

  return (
    <div>
        <h1>DOG</h1>
    </div>
  )
}

export default Dog