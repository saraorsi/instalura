import React from 'react'
import { Logo } from '../../../theme/Logo'
import { MenuWrapper } from './style/MenuWrapper'
import { Button } from '../Button'

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
                            <a href={link.url}>
                                {link.texto}
                            </a>
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