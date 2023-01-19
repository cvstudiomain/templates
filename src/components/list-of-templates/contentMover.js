export const overflowMove = (refs) => {
  console.log(refs);
  const { containerRef, largeInnerR, largeRef, tinyRef, tinyInnerR } = refs;
  const div = containerRef.current;

  const largeDiv = largeRef.current;
  const tinyDiv = tinyRef.current;
  const largeInnerDiv = largeInnerR.current;
  const tinyInnerDiv = tinyInnerR.current;

  function moveContent() {
    if (
      tinyInnerDiv?.scrollHeight > tinyInnerDiv?.offsetHeight ||
      largeInnerDiv?.scrollHeight > largeInnerDiv?.offsetHeight
    ) {
      // console.log("true");
      // The first div has overflowed, so create a new div with the same dimensions as the first div
      const newDiv = document?.createElement("div");
      const newTinyDiv = document?.createElement("div");
      const newLargeDiv = document?.createElement("div");
      const newTinyInnerDiv = document?.createElement("div");
      const newLargeInnerDiv = document?.createElement("div");
      newLargeDiv.className = largeDiv.className;
      newTinyDiv.className = tinyDiv.className;
      newTinyInnerDiv.className = tinyInnerDiv.className;
      newLargeInnerDiv.className = largeInnerDiv.className;
      newTinyDiv.style.minHeight = "100%";

      newLargeDiv.style.minHeight = "100%";

      newTinyInnerDiv.style.minHeight = "100%";

      newLargeInnerDiv.style.minHeight = "100%";
      newTinyDiv.appendChild(newTinyInnerDiv);
      newLargeDiv.appendChild(newLargeInnerDiv);
      newDiv.appendChild(newTinyDiv);
      newDiv.appendChild(newLargeDiv);

      newDiv.className = div.className;
      while (tinyInnerDiv.scrollHeight > tinyInnerDiv.offsetHeight) {
        // newDiv.appendChild(div.lastChild);
        newTinyInnerDiv.prepend(tinyInnerDiv.lastChild);
      }
      while (largeInnerDiv.scrollHeight > largeInnerDiv.offsetHeight) {
        // newDiv.prepend(div.lastChild);

        newLargeInnerDiv.prepend(largeInnerDiv.lastChild);
      }
      if (newLargeInnerDiv.firstChild) {
        newLargeInnerDiv.firstChild.style.marginTop = "0";
        newLargeDiv.style.paddingTop = "3rem";
      }
      if (newTinyInnerDiv.firstChild) {
        newTinyInnerDiv.firstChild.style.marginTop = "0";

        newTinyDiv.style.paddingTop = "3rem";
        newTinyDiv.style.marginTop = "0";
        newTinyDiv.style.borderRadius = "0";
      }

      // Insert the second div after the first div
      div.parentNode.insertBefore(newDiv, div.nextSibling);
    }
  }

  // Call the moveContent function when the window is resized
  window.addEventListener("resize", moveContent);

  // Call the moveContent function when the component is mounted
  moveContent();

  // Return a cleanup function to remove the event listener when the component is unmounted
  return () => {
    window.removeEventListener("resize", moveContent);
  };
};
