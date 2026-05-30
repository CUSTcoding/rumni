export const transition = {
  start: () => {
    window.dispatchEvent(new Event("route:out"));
  },
  end: () => {
    window.dispatchEvent(new Event("route:in"));
  },
};