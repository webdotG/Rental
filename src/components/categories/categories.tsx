
type typeCategoriesProps = {
  value: number,
  onChangeCategory: (index: number) => void,
}

const CATEGORIES = ['Все', 'Краны', 'Бульдозеры', 'Эксковаторы', 'Погрузчики', 'Услуги']


function Categories({value, onChangeCategory}:typeCategoriesProps) {
 
  return (
    <div className="categories">
      <ul>
        {CATEGORIES.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}</li>
        ))}

      </ul>
    </div>
  )
}

export default Categories