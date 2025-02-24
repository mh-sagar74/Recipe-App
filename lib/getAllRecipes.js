export default async function getAllRecipes() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes;
}
