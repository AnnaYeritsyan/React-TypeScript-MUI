import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import { Typography } from '@mui/material';


type SupportedLocales = keyof typeof locales;

const supportedLocales: SupportedLocales[] = ['hyAM', 'ruRU', 'enUS'];

export const LangSelect =()=>{
    const [locale, setLocale] = React.useState<SupportedLocales>('hyAM');

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme],
  );

    return(
        <Box sx={{ width: '100%' }}>
        <ThemeProvider theme={themeWithLocale}>
          <Autocomplete
            options={supportedLocales}
            getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
            style={{ width: 300 }}
            value={locale}
            disableClearable
            onChange={(event: any, newValue: SupportedLocales | null) => {
              if (newValue) {
                setLocale(newValue);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="Locale" fullWidth />
            )}
          />
          <Typography component="div">hello</Typography>
        </ThemeProvider>
      </Box>
    )
    
}