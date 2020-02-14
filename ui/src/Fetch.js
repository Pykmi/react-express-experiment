export async function getJson() {
  let response = await fetch(`http://localhost:8090/api/get`);
  let data = await response.json();
  return JSON.parse(data);
}
