// Define an initial transform for each element
const initialTransforms = elementIds.map(() => 0);

function shiftLeft(elementIds) {
  const elements = elementIds.map((elementId) => document.getElementById(elementId));
  const dimensions = getElementDimensions(elementIds);

  for (let i = 0; i < dimensions.length; i++) {
    if (i === 0) {
      const lastElementLeft = parseInt(elements[elements.length - 1].style.left);
      const firstElementLeft = parseInt(elements[0].style.left);
      const distance = lastElementLeft - firstElementLeft - 50;

      // Calculate the new transform value and accumulate it
      initialTransforms[i] += distance;

      elements[i].style.transform = `translateX(${initialTransforms[i]}px)`;
    } else {
      const prevElement = parseInt(elements[i - 1].style.left);
      const currentElement = parseInt(elements[i].style.left);
      const distance = currentElement - prevElement - 50;

      // Calculate the new transform value and accumulate it
      initialTransforms[i] += -distance;

      elements[i].style.transform = `translateX(${initialTransforms[i]}px)`;
    }
  }
}
