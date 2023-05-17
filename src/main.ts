import './style.css'

import { Person } from './bases/05-decorators'

const user = new Person(1, "Gabit", 32)

user.presentation();
user.shout();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${user}</h1>
  </div>
`
