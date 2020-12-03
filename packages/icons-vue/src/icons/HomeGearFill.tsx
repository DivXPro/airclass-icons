// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeGearFillSvg from '@airclass/icons-svg/lib/asn/HomeGearFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeGearFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeGearFillSvg}></AntdIcon>;
};

HomeGearFill.displayName = 'HomeGearFill';
HomeGearFill.inheritAttrs = false;
export default HomeGearFill;