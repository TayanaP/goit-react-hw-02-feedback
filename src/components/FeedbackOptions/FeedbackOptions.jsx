import PropTypes from 'prop-types'
import {List, Button} from 'components/FeedbackOptions/FeedbackOptions.styled'

export function FeedbackOptions ({options, onLeaveFeedback}) {
    return (
        <List>
            {options.map(option  => (
                <li key = {option}>
                    <Button
                     name = {option}
                     type="button"
                     onClick = {event => onLeaveFeedback(option)}>
                    {option}          
                    </Button>
                </li>
            ))}
        </List>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,   
}

