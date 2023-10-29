// import  useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';
// useWhyDidYouUpdate('Categories', {value, onChangeCategory})

import style from './categories.module.scss'

import { mockData } from '../../domain';

type typeCategoriesProps = {
  value: number,
  onChangeCategory: (index: number) => void,
}

function Categories({value, onChangeCategory}:typeCategoriesProps) {
 
  return (
    <div className={style.categories}>
      <ul className={style.categories_list}>
        {mockData.categories.map(({ id, name }, index) => (
          <li
            key={id}
            onClick={() => onChangeCategory(id)}
            className={value === index ? 'active' : ''}>
            {name}</li>
        ))}

      </ul>
    </div>
  )
}

export default Categories
