import React from 'react'
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const TextStyleVariantsMap = {
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    `,
    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    `
}


const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]};
`;

export function Text({ tag, variant, children }) {
    return (
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: propTypes.string.isRequired,
    variant: propTypes.string,
    children: propTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}