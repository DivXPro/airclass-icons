// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiscFillSvg from '@airclass/icons-svg/lib/asn/DiscFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscFillSvg}></AntdIcon>;
};

DiscFill.displayName = 'DiscFill';
DiscFill.inheritAttrs = false;
export default DiscFill;