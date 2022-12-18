import React, { useRef } from "react"
import Product from "./component/product/product"
import './app.css'

function App(props) {
    const mainRef = useRef();

    return (
        <div className="main" ref={mainRef}>
            <Product mainRef={mainRef} />
        </div>
    )
}
export default App