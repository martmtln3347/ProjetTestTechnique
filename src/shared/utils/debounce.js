export function debounce(fn, delayMs) {
  let timerId;

  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delayMs);
  };
}
