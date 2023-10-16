type typeCategoriesProps = {
  value: number,
  onChangeCategory: any,
}

function Categories({value, onChangeCategory}:typeCategoriesProps) {

  const CATEGORIES = ['Все', 'Краны', 'Бульдозеры', 'Эксковаторы', 'Погрузчики', 'Услуги']

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