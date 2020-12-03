// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeSmileLineSvg from '@airclass/icons-svg/lib/asn/HomeSmileLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeSmileLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeSmileLineSvg}></AntdIcon>;
};

HomeSmileLine.displayName = 'HomeSmileLine';
HomeSmileLine.inheritAttrs = false;
export default HomeSmileLine;