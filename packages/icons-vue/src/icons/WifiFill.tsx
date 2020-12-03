// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WifiFillSvg from '@airclass/icons-svg/lib/asn/WifiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiFillSvg}></AntdIcon>;
};

WifiFill.displayName = 'WifiFill';
WifiFill.inheritAttrs = false;
export default WifiFill;