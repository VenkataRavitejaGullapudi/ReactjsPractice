import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';

export default function NewMeetups() {
    const history = useHistory()
    function addMeetUpHandler(meetupData) {
        fetch(process.env.REACT_APP_FIREBASE_URL + 'meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(()=>{
                history.replace('/')
            })
    }
    return <section>
        <h1> New meetup page</h1>
        <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
}