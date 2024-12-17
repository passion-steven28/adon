import logo from '@/assets/logo.svg'

const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Shop',
        href: '/shop'
    },
    {
        label: 'Services',
        href: '#'
    },
    {
        label: 'About',
        href: '#'
    }
]

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between items-center py-2 px-4 bg-primary sticky top-0 z-50">
            <div>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            <nav className="flex flex-row justify-between items-center gap-4">
                {navItems.map((item) => (
                    <a
                        href={item.href}
                        key={item.label}
                        className="text-sm font-medium text-secondary-foreground"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default NavBar