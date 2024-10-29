// app/components/UserProfile.tsx

"use client";

import { useSession, signOut } from 'next-auth/react';

export default function UserProfile() {
    const { data: session } = useSession();

    if (!session) {
        return <p>NOT LOGGED IN</p>;
    }

    return (
        <div>
            <p>Signed in as {session.user?.name}</p>
        </div>
    );
}