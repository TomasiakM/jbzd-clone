import React, {useEffect} from "react"
import { useDispatch } from "react-redux"

import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
        fetch("https://picsum.photos/v2/list")
            .then(res => res.json())
            .then(data => dispatch({type: "SET_STORE", payload: data }))
    }, [dispatch])


  return (
    <div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
