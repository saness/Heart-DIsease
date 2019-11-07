const url =
  "https://newsapi.org/v2/everything?q=cardiovascular&apiKey=a1f446127d784b53a122e36b3d15e58b";
  
export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  
  return result.articles;
}
