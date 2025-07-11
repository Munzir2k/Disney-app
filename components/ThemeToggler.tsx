'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';

export function ThemeToggler() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <Switch
            checked={resolvedTheme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
    );
}
