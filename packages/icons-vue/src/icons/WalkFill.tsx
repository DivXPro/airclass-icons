// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalkFillSvg from '@airclass/icons-svg/lib/asn/WalkFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalkFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalkFillSvg}></AntdIcon>;
};

WalkFill.displayName = 'WalkFill';
WalkFill.inheritAttrs = false;
export default WalkFill;