export const generateQuote = () => {
  const quoteArr = [
    `"First, solve the problem. Then, write the code." - John Johnson`,
    `"Code is like humor. When you have to explain it, it's bad." - Cory House`,
    `"There is no such thing as failure, only results. - Richard Feynman"`,
  ]
  const draw = Math.abs(Math.round(Math.random() * quoteArr.length - 1))

  return quoteArr[draw]
}

export type Section = {
  id: string
  label: string
}

export const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
]
