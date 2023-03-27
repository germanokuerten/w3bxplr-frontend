import { Navbar, Welcome, Footer, Services, Transactions, Loader } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome min-h-screen">
        <Navbar />
        <Welcome />
        {/* <Services /> */}
        {/* <Transactions /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
