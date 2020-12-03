// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeGearLineSvg from '@airclass/icons-svg/lib/asn/HomeGearLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeGearLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeGearLineSvg}></AntdIcon>;
};

HomeGearLine.displayName = 'HomeGearLine';
HomeGearLine.inheritAttrs = false;
export default HomeGearLine;