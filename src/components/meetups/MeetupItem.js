import {useContext} from 'react'
import FavouritesContext from '../../store/favourites-context'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
export default function MeetupItem(props){
    const favouriteCtx = useContext(FavouritesContext);
    const isItemFavourite = favouriteCtx.itemIsFavourite(props.id)
    function toggleFavouriteStatusHandler(){
        if(isItemFavourite){
            favouriteCtx.removeFavourite(props.id)
        }
        else{
            favouriteCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.meetingLink}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouriteStatusHandler}>{isItemFavourite? 'Remove From Favourite':'To Favourites'}</button>
        </div>
        </Card>
    </li>
}