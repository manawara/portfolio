'use client'
import { useState } from 'react'
import { setTimeout } from 'timers'

const useCopyText = () => {
  const [status, setStatus] = useState<string | null>(null)
  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('Tekt został skopiowany')
      setTimeout(() => {
        setStatus(null)
      }, 2000)
    } catch (error) {
      setStatus('Tekt nie został skopiowany')
    }
  }
  return { status, copyText }
}

export default useCopyText
