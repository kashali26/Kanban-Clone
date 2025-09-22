import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const NavItems = ({ handleClick }: { handleClick?: () => void}) => {

    const user = {
        name: "Kashan",
        email: "kashan98765@yahoo.com",
        imageUrl:"/assets/images/david.webp",
    }

  return (
    <section className='nav-items'>
        <Link to='/' className='link-logo'>
            <img src='/assets/icons/logo.svg' alt='logo' className='size-[40px]'/>
            <h1 className='text-white font-bold '>TaskFlow</h1>
        </Link>

        <div className='container'>
            <nav>
                {sidebarItems.map(({ id, href, icon, label }) => (
                    <NavLink to={href} key={id}>
                        {({ isActive }: { isActive: boolean }) => (
                            <div className={cn('group nav-item ', {
                                'bg-[#6365ef] !text-[#ecf2ff]': isActive
                            })} onClick={handleClick}>
                                <img
                                    src={icon}
                                    alt={label}
                                    className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? 'brightness-0 invert' : '!text-white'}`}
                                />
                                {label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            <footer className="nav-footer">
                <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'David'} referrerPolicy="no-referrer" />

                <article>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </article>

                <button
                    className="cursor-pointer"
                >
                    <img
                        src="/assets/icons/logout.svg"
                        alt="logout"
                        className="size-6"
                    />
                </button>
            </footer>
        </div>
    </section>
  )
}

export default NavItems