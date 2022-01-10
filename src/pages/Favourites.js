import {useContext} from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavouritesContext from '../store/favourites-context'
export default function Favourites(){
    const favouriteCtx = useContext(FavouritesContext)
    let content;
    if(favouriteCtx.totalFavourites === 0){
        content = <p>No favourites here. Add some...</p>
    }
    else{
        content = <MeetupList meetups={favouriteCtx.favourites}/>
    }

    return <section>
        <h1>My Favourites</h1>
        {content}
    </section>
}
