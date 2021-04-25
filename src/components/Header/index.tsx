import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from  './styles.module.scss';


export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    return (
        <header className={styles.headerContainer}>
            <img src="/logo2.svg" alt="Logo Podcas"/>
            <p>O melhor Podcast para você ouvir sempre!</p>
            <span>{currentDate}</span>
            <p>Olá Matheus</p>
        </header>
    );
}