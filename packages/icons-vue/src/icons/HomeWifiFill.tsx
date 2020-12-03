// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeWifiFillSvg from '@airclass/icons-svg/lib/asn/HomeWifiFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeWifiFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeWifiFillSvg}></AntdIcon>;
};

HomeWifiFill.displayName = 'HomeWifiFill';
HomeWifiFill.inheritAttrs = false;
export default HomeWifiFill;