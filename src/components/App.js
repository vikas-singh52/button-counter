
import React,{useState} from "react"
import './../styles/App.css'

const App = () => {

  let [c,setCount] = useState(0);
  return (
    <div>
        <p>Button clicked {c} times</p>
        <button onClick={()=>setCount(c+1)}>Click me</button>
    </div>
  )
}

export default App
