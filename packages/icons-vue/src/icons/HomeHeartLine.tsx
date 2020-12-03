// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeHeartLineSvg from '@airclass/icons-svg/lib/asn/HomeHeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeHeartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHeartLineSvg}></AntdIcon>;
};

HomeHeartLine.displayName = 'HomeHeartLine';
HomeHeartLine.inheritAttrs = false;
export default HomeHeartLine;