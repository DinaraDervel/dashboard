export const getAllProducts = () => {
  return fetch("../../generatedData.json").then((response) => {
    return response.json();
  });
};
