import { Link, useNavigate } from "react-router-dom"
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type User } from '@/types';

import { LogOut, Settings } from 'lucide-react';

interface UserMenuContentProps {
    user: User;
    onLogout?: () => void; // Optional logout callback
}

export function UserMenuContent({ user, onLogout }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();
    const navigate = useNavigate(); // React Router navigation

    const handleLogout = () => {
        cleanup();
        
        // Call parent logout handler if provided
        if (onLogout) {
            onLogout();
        } else {
            // Default logout behavior - navigate to login
            navigate('/login');
            
            // Optional: Clear any client-side auth state
            // localStorage.removeItem('token');
            // sessionStorage.removeItem('user');
        }
    };

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" to="/profile" onClick={cleanup}>
                        <Settings className="mr-2" />
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2" />
                Log out
            </DropdownMenuItem>
        </>
    );
}