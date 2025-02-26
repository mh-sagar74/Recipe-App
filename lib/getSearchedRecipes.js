export default async function getSearchedRecipes(searchItem) {
  const response = await fetch(
    `https://dummyjson.com/recipes/search?q=${searchItem}`
  );
  const data = await response.json();
  return data.recipes;
}
