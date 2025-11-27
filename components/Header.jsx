import chefClaudeLogo from "../images/chef-claude-icon.png"

function Header(){
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef-claude-logo"/>
            <h1 id="logo-title">Chef Claude</h1>
        </header>
    )
}

export default Header