// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwordFillSvg from '@airclass/icons-svg/lib/asn/SwordFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwordFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwordFillSvg}></AntdIcon>;
};

SwordFill.displayName = 'SwordFill';
SwordFill.inheritAttrs = false;
export default SwordFill;