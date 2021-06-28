import React, { Component } from "react";
import styles from './Home.module.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is my first React homework</h1>
                <ul>
                    <li className={styles.taskItem}><p>Задание 1 - Профиль социальной сети</p></li>
                    <li className={styles.taskItem}><p>Задание 2 - Секция статистики</p></li>
                    <li className={styles.taskItem}><p>Задание 3 - Список друзей</p></li>
                    <li className={styles.taskItem}><p>Задание 4 - История транзакций</p></li>
                </ul>
            </div>
        )
    }
}