// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WomenFillSvg from '@airclass/icons-svg/lib/asn/WomenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WomenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomenFillSvg}></AntdIcon>;
};

WomenFill.displayName = 'WomenFill';
WomenFill.inheritAttrs = false;
export default WomenFill;