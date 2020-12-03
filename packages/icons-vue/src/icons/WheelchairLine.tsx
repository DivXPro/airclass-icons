// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WheelchairLineSvg from '@airclass/icons-svg/lib/asn/WheelchairLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WheelchairLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WheelchairLineSvg}></AntdIcon>;
};

WheelchairLine.displayName = 'WheelchairLine';
WheelchairLine.inheritAttrs = false;
export default WheelchairLine;