import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

import FlowIndicator from './FlowIndicator';

type PipelineComponentProps = {
  children: ReactNode,
  title?: string,
};

const PipelineComponent = ({ title, children }: PipelineComponentProps): JSX.Element => {
  return (
    <Stack sx={{ mb: 4 }}>
      {title ? <Typography variant='overline'>{title}</Typography> : null}
      {children}
      <FlowIndicator />
    </Stack>
  );
};

export default PipelineComponent;
