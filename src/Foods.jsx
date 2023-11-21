//import recipes from './recipes'
import poem from './recipes'

function Foods({id, name, ingredients}) {

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingre => 
          <li key={ingre}>
            {ingre}
          </li>
        )}
      </ul>
      </div>
  );
}

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <Foods {...recipe} key={recipe.id} />
        )}
    </div>
  );
}

export default function Poem() {
  return (
    <article>
    {poem.lines.map((line,index) => 
      <p key={index}>
        {checkLine(index)}
        {line}
      </p>
      )}
    </article>
  );
}

function checkLine (index) {
  if (index !== 0) {
    return <hr/>
  }
}


