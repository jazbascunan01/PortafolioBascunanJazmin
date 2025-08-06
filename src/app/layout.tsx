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
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
              integrity="sha512-h9FcoyWjHcOcmEVkxOfTLnmZFWIH0iZhZT1H2TbOq55xssQGEJHEaIm+PgoUaZbvgypcACLOKLS2MyagizEnrA=="
              crossOrigin=""/>


        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        {/*<link rel="icon" href="images/image-_3_.ico"/>*/}
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
              integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
              crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <title>Jazmin Bascuñan</title>
        <script src="https://unpkg.com/gsap@3.10.0/dist/gsap.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
              integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
              crossOrigin=""/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossOrigin="">
        </script>
        <link rel="stylesheet" href="style.css"/>
        <link rel="stylesheet" href="style/animate.css"/>
        <script src="script/wow.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
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
