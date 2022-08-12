export async function fetchData() {
  const response = await fetch("./data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await response.json();
}
