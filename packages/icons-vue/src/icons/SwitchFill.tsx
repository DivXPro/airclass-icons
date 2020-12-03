// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwitchFillSvg from '@airclass/icons-svg/lib/asn/SwitchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitchFillSvg}></AntdIcon>;
};

SwitchFill.displayName = 'SwitchFill';
SwitchFill.inheritAttrs = false;
export default SwitchFill;