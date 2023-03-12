import React from "react";
import MakePost from '../components/MakePost'

const CreatePost = (props) => {

  return(
    <><MakePost isAuth={props.isAuth}/></>
  )
}
export default CreatePost;