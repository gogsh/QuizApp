import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Drawer.module.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'




class Drawer extends Component {


    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.props.onClose}
                    >
                        {link.lable}
                    </NavLink>
                </li>
            )
        })

    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        const links = [
            { to: '/', lable: 'Список', exact: true },         
        ]

        

        if (this.props.isAuthenticated) {
            links.push({ to: '/quiz-creator', lable: 'Создать тест', exact: false })
            links.push({ to: '/logout', lable: 'Выйти', exact: false })
        } else {
            links.push({ to: '/auth', lable: 'Авторизация', exact: false })            
        }

        console.log('Auth', this.props.isAuthenticated);
        console.log(localStorage)

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer