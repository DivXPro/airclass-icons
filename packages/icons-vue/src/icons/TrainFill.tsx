// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TrainFillSvg from '@airclass/icons-svg/lib/asn/TrainFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrainFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrainFillSvg}></AntdIcon>;
};

TrainFill.displayName = 'TrainFill';
TrainFill.inheritAttrs = false;
export default TrainFill;