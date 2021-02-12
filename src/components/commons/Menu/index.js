import React from 'react'
import { Logo } from '../../../theme/Logo'
import { Text } from '../../foundation/Text';
import { Button } from '../Button'
import { MenuWrapper } from './style/MenuWrapper'



export default function Menu() {
    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas frequentes',
            url: '/faq'
        },
        {
            texto: 'Sobre',
            url: '/sobre'
        }
    ]
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CenterSide>
                {links.map(link => {
                    return (
                        <li key={link.url}>
                            <Text variant="smallestException" tag="a" href={link.url}>
                                {link.texto}
                            </Text>
                        </li>
                    )
                })}
            </MenuWrapper.CenterSide>
            <MenuWrapper.RightSide>
                <Button ghost variant="primary.main">
                    Entrar
                </Button>
                <Button variant="secondary.main">
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}