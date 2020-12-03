// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DoorOpenLineSvg from '@airclass/icons-svg/lib/asn/DoorOpenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoorOpenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoorOpenLineSvg}></AntdIcon>;
};

DoorOpenLine.displayName = 'DoorOpenLine';
DoorOpenLine.inheritAttrs = false;
export default DoorOpenLine;