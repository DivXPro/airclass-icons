// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TravestiFillSvg from '@airclass/icons-svg/lib/asn/TravestiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TravestiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TravestiFillSvg}></AntdIcon>;
};

TravestiFill.displayName = 'TravestiFill';
TravestiFill.inheritAttrs = false;
export default TravestiFill;