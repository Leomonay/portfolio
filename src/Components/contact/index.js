export function ContactForm(props){
    return(
        <div className='contactForm' style={{display:props.display}}>
            <div><label>Name:</label><input type='text'/></div>
            <div><label>email:</label><input type='text'/></div>
        </div>
    )
}