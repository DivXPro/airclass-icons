// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WaterFlashLineSvg from '@airclass/icons-svg/lib/asn/WaterFlashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WaterFlashLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WaterFlashLineSvg}></AntdIcon>;
};

WaterFlashLine.displayName = 'WaterFlashLine';
WaterFlashLine.inheritAttrs = false;
export default WaterFlashLine;