// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BaseStationLineSvg from '@airclass/icons-svg/lib/asn/BaseStationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BaseStationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BaseStationLineSvg}></AntdIcon>;
};

BaseStationLine.displayName = 'BaseStationLine';
BaseStationLine.inheritAttrs = false;
export default BaseStationLine;