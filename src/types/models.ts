export interface User {
  id: string;
  username: string;
  password: string;
  roleId: string;
}

export interface Role {
  id: string;
  roleName: string;
}