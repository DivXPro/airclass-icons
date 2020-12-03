// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeSmileFillSvg from '@airclass/icons-svg/lib/asn/HomeSmileFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeSmileFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeSmileFillSvg}></AntdIcon>;
};

HomeSmileFill.displayName = 'HomeSmileFill';
HomeSmileFill.inheritAttrs = false;
export default HomeSmileFill;