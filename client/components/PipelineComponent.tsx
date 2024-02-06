import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import FlowIndicator from './FlowIndicator';

type PipelineComponentProps = {
  children: ReactNode,
};

const PipelineComponent = ({ children }: PipelineComponentProps): JSX.Element => {
  return (
    <Stack sx={{ mb: 4 }}>
      {children}
      <FlowIndicator />
    </Stack>
  );
};

export default PipelineComponent;
