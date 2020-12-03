// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeavyShowersFillSvg from '@airclass/icons-svg/lib/asn/HeavyShowersFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeavyShowersFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeavyShowersFillSvg}></AntdIcon>;
};

HeavyShowersFill.displayName = 'HeavyShowersFill';
HeavyShowersFill.inheritAttrs = false;
export default HeavyShowersFill;