import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function ErrorPopup (props) {
    return (

        <Popup trigger={props.userErrorOccurred} >
          <div>
              {`Something went wrong: ${props.error} `}
          </div>
        </Popup>
      );
}

    
export default ErrorPopup