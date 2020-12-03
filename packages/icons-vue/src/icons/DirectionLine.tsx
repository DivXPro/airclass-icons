// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DirectionLineSvg from '@airclass/icons-svg/lib/asn/DirectionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DirectionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectionLineSvg}></AntdIcon>;
};

DirectionLine.displayName = 'DirectionLine';
DirectionLine.inheritAttrs = false;
export default DirectionLine;