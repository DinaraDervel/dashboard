export const getAllProducts = () => {
  return fetch("/dashboard/generatedData.json").then((response) => {
    return response.json();
  });
};
