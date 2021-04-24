import styles from './styles.module.scss';
import Link from 'next/link';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM yyyy', {
    locale: ptBR
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <button type="button">
          <img src="/logo.svg" alt="Podcastr" />
        </button>
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}