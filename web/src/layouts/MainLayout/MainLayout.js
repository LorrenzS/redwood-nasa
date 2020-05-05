import Header from 'src/components/Header/Header'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
