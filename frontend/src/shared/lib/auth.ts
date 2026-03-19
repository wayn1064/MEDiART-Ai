export type Role = 'ADMIN' | 'CREATOR' | 'USER';

export interface CustomClaims {
  role: Role;
  accessibleModules: string[];
}

export interface User {
  id: string;
  name: string;
  tenantId: string;
  customClaims: CustomClaims;
}

// Mocking User aligned with WAYN rules
export const currentUser: User = {
  id: 'u1',
  name: '김원장',
  tenantId: 'hosp_001',
  customClaims: {
    role: 'ADMIN',
    accessibleModules: ['all'],
  },
};

export const checkAccess = (module: string) => {
  if (currentUser.customClaims.role === 'ADMIN') return true;
  return currentUser.customClaims.accessibleModules.includes(module);
};
