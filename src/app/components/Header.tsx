import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>EasyRecipes</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <button>
                        Login
                    </button>
                    <button>
                        Register
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
