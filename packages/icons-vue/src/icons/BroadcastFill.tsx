// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BroadcastFillSvg from '@airclass/icons-svg/lib/asn/BroadcastFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BroadcastFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroadcastFillSvg}></AntdIcon>;
};

BroadcastFill.displayName = 'BroadcastFill';
BroadcastFill.inheritAttrs = false;
export default BroadcastFill;