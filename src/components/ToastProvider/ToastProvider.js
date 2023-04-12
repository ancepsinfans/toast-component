import React from 'react';
import useKey from '../../hooks/use-key';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {

  const [toastArray, setToastArray] = React.useState([])

  const addToast = (msg, variant) => {
    let newArray = [...toastArray, { msg, variant, id: crypto.randomUUID() }]
    setToastArray(newArray);
  }

  const closeToast = (id) => {
    let newArray = toastArray.filter((t) => {
      return t.id !== id
    })
    setToastArray(newArray)
  }

  useKey(() => { setToastArray([]) })

  return (
    <ToastContext.Provider
      value={{
        toastArray,
        addToast,
        closeToast,

      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
