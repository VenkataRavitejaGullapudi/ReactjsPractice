import { useContext } from 'react'
import {Link} from 'react-router-dom'
import FavouritesContext from '../../store/favourites-context'
import classes from './MainNavigation.module.css'
import navStyles from './MainNavigation.module.css'

const MainNavigation = ()=>{
    const favouriteCtx = useContext(FavouritesContext)

    return <header className={navStyles.header}>
        <div className={navStyles.logo}> Just Meetups </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/meetup/new'>Add Meetup</Link>
                </li>
                <li>
                    <Link to='/meetup/favourites'>
                        Favourite Meetups
                        <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;