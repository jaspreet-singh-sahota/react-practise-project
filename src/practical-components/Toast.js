import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ToastBox = () => {
  const notify = () => 
  {toast.success("Wow so easy !", {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
  toast.info("Wow so easy !", {position: toast.POSITION.TOP_RIGHT, autoClose: false});
  toast.warning("Wow so easy !", {position: toast.POSITION.TOP_CENTER});
  toast.error("Wow so easy !", {position: toast.POSITION.BOTTOM_CENTER});
  toast("Wow so easy !", {position: toast.POSITION.BOTTOM_LEFT});}

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default ToastBox
