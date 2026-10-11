
import "./search.css"
import { useEffect, useState } from "react"
import products from "../services/api"


function Search() {
    const [input, setInput] = useState("")
    const [productArr, setProductArr] = useState([])

    useEffect(() => {
        async function getProducts() {
            const response = await products()
            setProductArr(response)
        }
        getProducts()
    }, [])
    const filteredProducts = productArr.filter(product => product.product_name.toLowerCase().startsWith(input.toLowerCase()))
    return (
        <>
            <div className="search-container">
                <div className="search-block">
                    <img className="search-icon" src="/assets/pictures/category/icons/search.png" alt="Search" />
                    <input value={input} onInput={(e) => { setInput(e.target.value); setBurgerMenu(true) }} type="text" placeholder="Search essentials, groceries and more..." />
                    <img className="suggestions" src="/assets/pictures/category/icons/list.png" alt="Suggestions" />
                </div >

                {input.length > 0 && filteredProducts.length > 0 ?
                    <div className="product-list">
                        {
                            filteredProducts.map((product) => {
                                return (
                                    <div className="product-row" key={product.id}>
                                        <img className="product-image" src={product.image_src} alt={product.image_src} />
                                        <p>{product.product_name}</p>
                                        <p>{product.price}</p>
                                        <p>{product.is_sold === true ? "Currently Not In Stock" : "In Stock"}</p>
                                    </div>
                                )

                            })
                        }
                    </div> : null
                }
            </div >

        </>
    )
}

export default Search