import React,{useEffect} from 'react'

const useDocumentTitle = (count) => {

      useEffect(() => {
        document.title = `Count ${count}`;
      }, [count]);

    return (
        <div>
            
        </div>
    )
}

export default useDocumentTitle
