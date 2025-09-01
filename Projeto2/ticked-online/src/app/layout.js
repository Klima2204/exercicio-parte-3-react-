import { ThemeContextProvider } from '@/context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeContextProvider>
          <CssBaseline />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
