// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoreosFillSvg from '@airclass/icons-svg/lib/asn/CoreosFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoreosFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoreosFillSvg}></AntdIcon>;
};

CoreosFill.displayName = 'CoreosFill';
CoreosFill.inheritAttrs = false;
export default CoreosFill;