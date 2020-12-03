// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrainLineSvg from '@airclass/icons-svg/lib/asn/TrainLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrainLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrainLineSvg}></AntdIcon>;
};

TrainLine.displayName = 'TrainLine';
TrainLine.inheritAttrs = false;
export default TrainLine;