import React from "react";
import headerStyles from './Header.module.css';

const Header = () => 
(<div className={headerStyles.container}>
    <span className={headerStyles.logoText}>Logotype</span>
    <button className={headerStyles.button}>Connect wallet</button>
</div>);

export default Header;
