// src/app/profile/[id]/page.tsx

import { permanentRedirect } from 'next/navigation';


export default function ComboBox() {
    permanentRedirect("http://10.1.40.11:3000/secret")
}