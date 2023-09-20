
interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='max-w-[1440px] mx-auto sm:px-10 lg:px-20'>
      {children}
    </div>
  )
}

export default Container