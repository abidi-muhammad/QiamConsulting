import { SidebarProvider } from '@/components/ui/sidebar';
import { SharedData } from '@/types';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
    // Remove usePage since it's not available in React
    // If you need sidebar state, manage it differently
    // For now, we'll use a default value
    const isOpen = false; // Default to closed or manage with state

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>;
}