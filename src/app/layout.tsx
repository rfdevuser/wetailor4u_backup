"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { ApolloProvider } from '@apollo/client';
import client from '@/utils/apollo/ApolloClient';



const inter = Inter({ subsets: ["latin"] });
const navigationData = [
  { name: "Home", link: "/" },
  { name: "Blouse Designs", link: "/MTM_Blouse" },
  { name: "Store", link: "/Fabric_Store" },
  { name: "Favorites", link: "/SingleFabricDescriptionPage" },
  { name: "Saved", link: "/saved" },
];



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      
      <head />

      <body className={`bg-white dark:bg-black ${inter.className}`}>
      <ApolloProvider client={client}>
   
          <Header />
        <Sidebar navigationData={navigationData}  />
       
          {children}
          <Footer/>
          </ApolloProvider>
        </body>
    </html>
  );
}
