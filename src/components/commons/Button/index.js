import styled, { css } from 'styled-components'
import get from 'lodash/get'

const ButtonGhost = css`
    color: #F87B6B;
    background: transparent;
`

const ButtonDefault = css`
    color: white;
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${({ theme}) => get(theme, `borderRadius`)};
    transition:${({ theme}) => get(theme, `transition`)};
    ${function (props) {
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    &:hover,
    &:focus{
        transition:${({ theme}) => get(theme, `transition`)};
        opacity: .5;
    }

`