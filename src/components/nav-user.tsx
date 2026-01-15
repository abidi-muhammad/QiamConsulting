import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { useIsMobile } from '@/hooks/use-mobile';
import { type SharedData, type User } from '@/types'; // Import User type if needed

import { ChevronsUpDown } from 'lucide-react';

// Define props interface
interface NavUserProps {
    user?: User; // Pass user as prop
    auth?: {
        user: User;
    };
}

export function NavUser({ user, auth }: NavUserProps) {
    // Use auth prop if provided, otherwise use user prop
    const currentUser = auth?.user || user;
    
    const { state } = useSidebar();
    const isMobile = useIsMobile();

    // If no user data, don't render or show placeholder
    if (!currentUser) {
        return null; // or a login button
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton size="lg" className="group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent">
                            <UserInfo user={currentUser} />
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        align="end"
                        side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
                    >
                        <UserMenuContent user={currentUser} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}

// Optional: Default props
NavUser.defaultProps = {
    user: undefined,
    auth: undefined,
};