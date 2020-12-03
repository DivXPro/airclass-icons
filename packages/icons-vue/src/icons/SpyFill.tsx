// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpyFillSvg from '@airclass/icons-svg/lib/asn/SpyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpyFillSvg}></AntdIcon>;
};

SpyFill.displayName = 'SpyFill';
SpyFill.inheritAttrs = false;
export default SpyFill;