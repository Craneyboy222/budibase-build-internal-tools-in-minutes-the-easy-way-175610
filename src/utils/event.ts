/* Event utilities */
export const addEventListener = (element: HTMLElement, event: string, handler: EventListener) => {
  element.addEventListener(event, handler);
};

export const removeEventListener = (element: HTMLElement, event: string, handler: EventListener) => {
  element.removeEventListener(event, handler);
};