import logo from '@/assets/logo.png'

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
        label: 'About',
        href: '#'
    }
]

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between items-center py-2 px-4 bg-primary sticky top-0 z-50">
            <div className='relative w-12 h-auto'>
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