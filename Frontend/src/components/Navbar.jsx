import React from 'react'

const links = [
    {
        label: "About", 
        href: "#about"
    },
    {
        label: "Work", 
        href: "#work"
    },
    {
        label: "Skills", 
        href: "#skills"
    },
    {
        label: "Experience", 
        href: "#exp"
    },
    {
        label: "Contact", 
        href: "#contact"
    },

]

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const close = () => setOpen(false);
    return (
        <header className='nav'>
            <div className="container nav__inner">
                <a href="#" className='nav__logo mono'>&lt;Vannuk.dev/&gt;</a>
                <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
                {links.map((link) => (
                    <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
                ))}
            </nav>
            <a href="#contact" className="btn btn--primary nav__cta">Hire me</a>
            <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
                {open ? "✕" : "≡"}
            </button>
            </div>       
        </header>
    )
}

export default Navbar
