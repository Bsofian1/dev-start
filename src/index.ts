import { greetUser } from '$utils/greet';

window.Webflow ||= []; //When webflow is ready
window.Webflow.push(() => {
  const name = 'Sofian bettayeb';
  greetUser(name);
});
