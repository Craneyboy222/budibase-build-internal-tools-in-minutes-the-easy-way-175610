/* TypeScript types */
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
}

export interface Application {
  id: string;
  name: string;
  components: Component[];
}

export interface Component {
  id: string;
  type: string;
  properties: Record<string, any>;
}