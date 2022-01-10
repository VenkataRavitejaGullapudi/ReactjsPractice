import React, { useRef } from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'


export default function NewMeetupForm(props) {
    const formInput ={
        titleInputRef : useRef(),
        imageInputRef : useRef(),
        meetingLinkInputRef : useRef(),
        descriptionInputRef : useRef(),
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const meetupData={
            title:formInput.titleInputRef.current.value,
            image:formInput.imageInputRef.current.value,
            meetingLink:formInput.meetingLinkInputRef.current.value,
            description:formInput.descriptionInputRef.current.value,
        }
        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title"  ref={formInput.titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image" >Meetup Image</label>
                    <input type="url" required id="image" ref={formInput.imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="meetingLink" >meetingLink</label>
                    <input type="url" required id="meetingLink" ref={formInput.meetingLinkInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description" >Description</label>
                    <textarea required id="description" rows='5' ref={formInput.descriptionInputRef}>
                    </textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}
