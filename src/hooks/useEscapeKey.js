import React from 'react';

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        callback()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [callback])
}