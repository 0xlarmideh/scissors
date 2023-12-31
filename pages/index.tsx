import Faq from "@/components/faqs/faqs";
import Features from "@/components/features/features";
import Footer from "@/components/footer/footer";
import Header from "@/components/home/header";
import Navbar from "@/components/navbar/navbar";
import { Container } from "@chakra-ui/react";
import React from "react";
import { toast } from "react-toastify";
import Supabase from "../config/supabase";
import { useSession } from "@supabase/auth-helpers-react";

const HomePage = () => {
  // const handleClick = () => {
  //   toast.success("Hello world!");
  // };

  // const session = useSession();

  return (
    <>
      <Navbar />
      <Header />
      <Container maxW={"7xl"}>
        <Features />
      </Container>
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
