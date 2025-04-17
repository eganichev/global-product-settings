import { FC, PropsWithChildren } from 'react';
import { Container, Stack } from '@mui/material';
import { AppHeader } from 'components';
import Box from '@mui/material/Box';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        height: '100dvh',
      }}
    >
      <Stack direction='column' height='100%'>
        <AppHeader />
        <Box flexGrow={1}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default MainLayout;
