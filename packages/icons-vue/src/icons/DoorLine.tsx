// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorLineSvg from '@airclass/icons-svg/lib/asn/DoorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorLineSvg}></AntdIcon>;
};

DoorLine.displayName = 'DoorLine';
DoorLine.inheritAttrs = false;
export default DoorLine;