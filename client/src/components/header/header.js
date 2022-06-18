import "./header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><em className="fas fa-bars"></em></label>
                <div className="header-content">
                    <div className="logo"><a href="#">ARTPHORIA</a></div>
                    <ul className="links">
                        <li><a href="#"><em className="fas fa-home nav-icon"></em>Home</a></li>
                        <li>
                            <a href="#" class="desktop-link"><em class="fas fa-compass nav-icon"></em>Explore</a>
                            <input type="checkbox" id="show-explore" />
                            <label for="show-explore"><em class="fas fa-compass nav-icon"></em>Explore</label>
                            <ul>
                                <li><a href="#"><em class="fas fa-image nav-icon"></em>by Genre</a></li>
                                <li><a href="#"><em class="fas fa-users nav-icon"></em>by Following</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><em className="fas fa-comment-alt nav-icon"></em>Chats<em className="fas fa-circle"></em></a></li>
                        <li><a href="#"><em className="fas fa-bell nav-icon"></em>Notifications<em className="fas fa-circle"></em></a></li>
                        <li><a href="#"><em className="fas fa-pen nav-icon"></em>Create new</a></li>
                        <li>
                            <a href="#" className="desktop-link"><em className="fas fa-user-circle nav-icon"></em>Your account</a>
                            <input type="checkbox" id="show-account" />
                            <label htmlFor="show-account"><em className="fas fa-user-circle nav-icon"></em>Your account</label>
                            <ul>
                                <li><a href="#"><em className="fas fa-user-circle nav-icon"></em>Your profile</a></li>
                                <li><a href="#"><em className="fas fa-cog nav-icon"></em>Settings</a></li>
                                <li><a href="#"><em className="fas fa-question-circle nav-icon"></em>Help</a></li>
                                <li><a href="#"><em className="fas fa-sign-out-alt nav-icon"></em>Sign out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon"><em className="fas fa-search"></em></label>
                <form action="#" className="search-box">
                    <input type="text" placeholder="Search" required />
                    <button type="submit" className="go-icon"><em className="fas fa-check"></em></button>
                </form>
            </nav>
        </header>
    );
};

export default Header;