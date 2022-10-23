export function timeout(time = 2000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
