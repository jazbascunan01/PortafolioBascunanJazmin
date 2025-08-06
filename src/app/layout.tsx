import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "./style.css";
import "./animate.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//import ClientSideSetup from "@/components/ClientSideSetup";
import AOSLoader from "@/components/AOSLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jazmín Bascuñan | Portafolio",
    description: "Portafolio web de Jazmín Bascuñan, Desarrolladora de Aplicaciones Informáticas.",
    icons: {
        icon: '/images/image-_3_.ico',
    }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
    <head>
        {/*<link rel="icon" href="images/image-_3_.ico"/>*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
              integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
              crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        {/*<link rel="icon" href="images/image-_3_.ico"/>*/}

    </head>
    <body className={inter.className}>


    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    <AOSLoader />
    </body>
    </html>
  );
}
