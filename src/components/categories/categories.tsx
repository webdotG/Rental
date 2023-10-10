import { useState } from "react"

function Categories({value, onChangeCategory}) {

  const CATEGORIES = ['Все', 'Краны', 'Бульдозеры', 'Эксковаторы', 'Камазы', 'Услуги']

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