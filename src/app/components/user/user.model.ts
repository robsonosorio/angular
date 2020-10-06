import { UserCreateComponent } from './user-create/user-create.component';
export interface User {
  id?: number
  name: string
  email: string
  password: string
  adm_user: boolean
  active: boolean
}
