// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeHeartFillSvg from '@airclass/icons-svg/lib/asn/HomeHeartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeHeartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHeartFillSvg}></AntdIcon>;
};

HomeHeartFill.displayName = 'HomeHeartFill';
HomeHeartFill.inheritAttrs = false;
export default HomeHeartFill;