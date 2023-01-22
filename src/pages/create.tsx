import Vault from "@components/vault/Main";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { DrawerContainer } from "@components/layout/drawer-container";
import { PageContainer } from "@components/layout/page-container";
import { Header } from "@components/layout/header";
import { HomeContent } from "@components/home/home-content";
import { Footer } from "@components/layout/footer";
import { Menu } from "@components/layout/menu";

const Create: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <Head>
        <title>Create Vault</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Everything you need to create your Solana X Bonk Vault"
        />
      </Head>
      {/* <DrawerContainer>
        <PageContainer>
          <Header />
          <HomeContent />
          <Footer />
        </PageContainer>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <Menu
            className="p-4 w-80 bg-base-100 text-base-content"
          />
        </div>
      </DrawerContainer> */}
      <div className="h-full w-full">
        <Vault />
      </div>
    </div>
  );
};

export default Create;

// fdeab1