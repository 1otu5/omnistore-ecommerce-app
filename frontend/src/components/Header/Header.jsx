import "./header.css"
import Search from "../Search"

function Header() {
    return (
        <header>
            <div className="mega-mart-wrapper">
                <div className="mega-mart">
                    <p>Welcome to worldwide Megamart!</p>

                    <div className="mega-mart-actions">
                        <div className="delivery">
                            <img src={"/assets/pictures/category/icons/location.png"} alt="Location" />
                            <p>
                                Deliver to <span>423651</span>
                            </p>
                        </div>

                        <div className="order">
                            <img src={"/assets/pictures/category/icons/delivery-truck.png"} alt="Delivery truck" />
                            <p>Track your order</p>
                        </div>

                        <div className="offers">
                            <p>All Offers</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="header">
                <div className="logo-block">
                    <div className="icon-box">
                        <img src="/assets/pictures/category/icons/open-list.png" alt="Menu" />
                    </div>
                    <h1>MegaMart</h1>
                </div>

                <div className="header-actions">
                    <Search />
                    <div className="authentication">
                        <img src="/assets/pictures/category/icons/user.png" alt="User" />
                        <a href="">Sign Up/Sign In</a>
                    </div>

                    <div className="items-in-cart">
                        <img src="/assets/pictures/category/icons/cart.png" alt="Cart" />
                        <a href="">Cart</a>
                    </div>
                </div>
            </section>

            <section className="categories">
                <nav className="categories-nav">
                    {[
                        'Groceries',
                        'Premium Fruits',
                        'Home & Kitchen',
                        'Fashion',
                        'Electronics',
                        'Beauty',
                        'Home Improvement',
                        'Sports, Toys & Luggage',
                    ].map((label) => (
                        <div className="category-item" key={label}>
                            <button className="category-button">{label}</button>
                            <img className="category-arrow" src="/assets/pictures/category/icons/arrow-down.png" alt="" />
                        </div>
                    ))}
                </nav>
            </section>
        </header>
    )
}


export default Header