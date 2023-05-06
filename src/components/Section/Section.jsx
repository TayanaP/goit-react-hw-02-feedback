import PropTypes from 'prop-types'
import {Wrapper, Title} from 'components/Section/Section.styled'

export function Section ({ title, children }) {
    return (
        <Wrapper>
             <Title>{title}</Title>
             {children}
        </Wrapper>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};