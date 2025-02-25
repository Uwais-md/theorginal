import "./globals.css";
import {NavBar} from '../components'
export const metadata = {
  title: "The Original",
  description: "The Original",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <body className=" ">
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
