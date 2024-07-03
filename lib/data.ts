import gitIcon from '@/public/git-icon.svg'
import cssIcon from '@/public/icon-css.svg'
import htmlIcon from '@/public/icon-html.svg'
import jsIcon from '@/public/icon-js.svg'
import reduxIcon from '@/public/icon-redux.svg'
import tailwindIcon from '@/public/icon-tailwind.svg'
import typescriptIcon from '@/public/icon-typescript.svg'
import reactIcon from '@/public/logos_react.svg'
import sassIcon from '@/public/logos_sass.svg'
import nextIcon from '@/public/next.svg'
import beFit from '@/public/beFit.png'

export const dataTechStack = [
  {
    image: gitIcon,
    alt: 'git icon',
    description: 'GIT',
  },
  {
    image: cssIcon,
    alt: 'css icon',
    description: 'CSS',
  },
  {
    image: htmlIcon,
    alt: 'html icon',
    description: 'HTML',
  },
  {
    image: jsIcon,
    alt: 'javascript icon',
    description: 'JavaScript',
  },
  {
    image: reduxIcon,
    alt: 'redux icon',
    description: 'Redux',
  },
  {
    image: tailwindIcon,
    alt: 'tailwind icon',
    description: 'Tailwind',
  },
  {
    image: typescriptIcon,
    alt: 'typescript icon',
    description: 'TypeScript',
  },

  {
    image: reactIcon,
    alt: 'reactjs icon',
    description: 'ReactJS',
  },
  {
    image: sassIcon,
    alt: 'sass icon ',
    description: 'Sass',
  },
  {
    image: nextIcon,
    alt: 'nextjs icon',
    description: 'NextJS',
  },
]

export const projects = [
  {
    name: 'beFit',
    description:
      'BeFit is a comprehensive health and fitness application designed to help users achieve their wellness goals through personalized meal planning, calorie tracking, and exercise management.',
    image: {
      src: beFit,
      alt: 'befit project',
    },
    href: 'https://github.com/manawara/beFit',
    liveLink: '#',
    techStack: 'ReactJS, Tailwind, Firebase',
  },
]
