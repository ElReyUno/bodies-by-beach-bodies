import Nav from './Nav'

function Header() {
    return (
        <header className="flex flex-col p-4">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
            <Nav />
        </header>
    )
}

export default Header;