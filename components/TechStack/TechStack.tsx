import React from 'react'
import TechStackItem from './TechStackItem'
import Wrapper from './Wrapper'
export type dataType = {
  image: string
  alt: string
  description: string
}

type TechStackProps = {
  title: string
  id?: string
  data: dataType[]
}
const TechStack = ({ title, data, id }: TechStackProps) => {
  return (
    <section id={id}>
      <h3 className="text-center my-8 text-3xl font-poppins"> {title}</h3>

      <Wrapper>
        {data.map((icon) => (
          <TechStackItem key={icon.alt} {...icon} />
        ))}
      </Wrapper>
    </section>
  )
}

export default TechStack
