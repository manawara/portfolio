'use client'
import { useState } from 'react'
import { setTimeout } from 'timers'

const useCopyText = () => {
  const [status, setStatus] = useState<string | null>(null)
  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('The text has been copied')
      setTimeout(() => {
        setStatus(null)
      }, 2000)
    } catch (error) {
      setStatus('The text has been copied')
    }
  }
  return { status, copyText }
}

export default useCopyText
