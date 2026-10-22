import { useState } from "react";

function Rating () {
    const stars = Array.from({length: 5}, (_, i) => i + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const clicked = (index) => console.log('Clicked!', index)
    const feedbackMessage = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']

    const handleSubmit = () => {
        if(rating > 0){
            setSubmitted(true)
        }
    }

    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
        setHover(0)
    } 

    return (
        <div className="rating-container">
            <h2>Rate Your Experience!</h2>
            <p>{rating}</p>
            <p>{hover}</p>
            <div className="stars">
                {[1,2,3,4,5].map((star, index) => (
                    <span 
                        key={star} 
                        onClick={() => setRating(star)} 
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className={`star ${star <= (hover || rating) ? 'active' : ''}`}
                        >
                        {'\u2605'}
                    </span>
                ))}
            </div>
            {rating > 0 && <p className="feedback">{ feedbackMessage[rating - 1]}</p>}

            <button 
                className='submit-btn'
                onClick={handleSubmit}
                disabled={rating === 0}
            >
              Submit      
            </button>

            {
                submitted && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2>Thank You!</h2>
                            <p>You rated us {rating} star{rating > 1 ? 's' : ''}</p>
                            <button
                                onClick = {closeModal} 
                                className="close-btn">
                                Close
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

// const styles = {
//     container: {
//         textAlign: 'center',
//         fontFamily: 'Arial',
//         padding: '20px',
//     },
//     heading: {color: 'red'}
// }

export default Rating ;