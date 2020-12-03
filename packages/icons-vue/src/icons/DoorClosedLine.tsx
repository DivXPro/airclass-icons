// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorClosedLineSvg from '@airclass/icons-svg/lib/asn/DoorClosedLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorClosedLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorClosedLineSvg}></AntdIcon>;
};

DoorClosedLine.displayName = 'DoorClosedLine';
DoorClosedLine.inheritAttrs = false;
export default DoorClosedLine;