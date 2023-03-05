import Button from 'react-bootstrap/Button'

function ReviewContainer (props) {

    
return (
    <div>
    <div className="review-container">{props.currentReview}</div>
    <Button onClick={props.navigate} className="login-form-button">Edit Review</Button>
    </div>
)
}

export default ReviewContainer