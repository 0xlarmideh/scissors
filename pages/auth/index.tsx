import { Box, Container } from "@chakra-ui/react";
import AuthForm from "../../components/auth/auth-form";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import AccountForm from "../../components/auth/account";
import { ReactElement } from "react";
// import { landingLayout } from "@/types/type";

import { useEffect } from "react";
import { useRouter } from "next/router";

type Inputs = {
  email: String;
  password: String;
};

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      {!session ? (
        <Container className="auth" maxW="500px">
          <AuthForm />
        </Container>
      ) : <Box>You are logged in</Box>}
    </>
  );
};


export default Login;