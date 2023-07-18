"use client";
import {useEffect} from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  // const session = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (session) {
  //     router.push("/home");
  //   }
  // }, [session])
  return (
    <Auth
      supabaseClient={supabase}
      // view="magic_link"
      appearance={{ theme: ThemeSupa }}
      // theme="dark"
      // onAuthSuccess={() => router.push("/home") }

      providers={["google", "github",  ]}
      redirectTo="http://localhost:3000/"
    />
  );
}
