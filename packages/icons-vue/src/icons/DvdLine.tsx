// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DvdLineSvg from '@airclass/icons-svg/lib/asn/DvdLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DvdLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DvdLineSvg}></AntdIcon>;
};

DvdLine.displayName = 'DvdLine';
DvdLine.inheritAttrs = false;
export default DvdLine;