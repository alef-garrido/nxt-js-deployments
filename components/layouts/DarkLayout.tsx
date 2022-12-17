import { FC } from 'react';
import styles from './DarkLayout.module.css';

export const DarkLayout: FC = ({ children }) => {
  return (
    <div className={ styles['container'] }>
      <main className={ styles['main'] } >
          <h3>Dark-Layout</h3>
          <div>
              { children } 
          </div>
      </main>
    </div>
  );
};
