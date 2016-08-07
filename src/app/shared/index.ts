import { AuthService } from './auth.service';
import { AuthGuard } from './AuthGuard';
import { NoAuthGuard } from './NoAuthGuard';

export {AuthService};
export {AuthGuard};
export {NoAuthGuard};

export const AUTH_PROVIDERS: any[] = [
    AuthGuard, 
    NoAuthGuard, 
    AuthService
];
