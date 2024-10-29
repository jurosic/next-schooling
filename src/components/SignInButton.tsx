// app/auth/signin/SignInButton.tsx

"use client";

import { signIn } from 'next-auth/react';

interface Provider {
    id: string;
    name: string;
}

export default function SignInButton({ provider }: { provider: Provider }) {
    return (
        <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
        </button>
    );
}