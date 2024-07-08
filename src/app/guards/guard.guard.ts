import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('data-token');
  if (!token) return false;
  const tokenParts = token.split('');
  const userData = tokenParts[1];
  console.log(token, tokenParts, window.atob(tokenParts[1]));
  const user = JSON.parse(window.atob(userData));

  return user.isAdmin;
};
