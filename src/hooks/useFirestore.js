import { useState, useEffect } from 'react'
import { projectFirestore } from './../firebase/config'

export const useFireStore = (collection) => {
  const [images, setImages] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let items = []
        snap.forEach((item) => {
          items.push({ ...item.data(), id: item.id })
        })
        setImages(items)
        setLoading(false)
      })

    return () => unsub()
  }, [collection])

  return { images, loading }
}
