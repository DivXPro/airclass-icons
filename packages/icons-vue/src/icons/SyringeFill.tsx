// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SyringeFillSvg from '@airclass/icons-svg/lib/asn/SyringeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SyringeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SyringeFillSvg}></AntdIcon>;
};

SyringeFill.displayName = 'SyringeFill';
SyringeFill.inheritAttrs = false;
export default SyringeFill;