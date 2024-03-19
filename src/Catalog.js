import classes from './App.module.scss'; // 1 Пункт
import styles from './Catalog.module.scss'; // 1 Пункт
import { Menu } from './Menu';
import { useLoaderData ,useNavigate } from 'react-router-dom';

export function Catalog() {

  const items = useLoaderData();  // 4 пункт каталог из нескольких элементов
  const navigate = useNavigate(); // 5 пункт переход на страницу с блюдами

  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <Menu/>

        {/* 4 пункт */}
        <ul className={styles.apiList}>
          {items.map((itemData) => ((
            <li key={itemData.idMeal}>
              <img
                className={styles.apiListImg}
                src={itemData.strMealThumb}
                alt={itemData.strMeal + ' photo'}
              />
              <div>
                {itemData.strMeal} ({itemData.strCategory})
              </div>
              {/* 5 пункт */}
              <div
                className={styles.apiListBut}
                onClick={() => {
                    navigate(itemData.idMeal)
                }}
              >
                about food
              </div>
            </li>
          )))}
        </ul>
      </header>
    </div>
  );
}