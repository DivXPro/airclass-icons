// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DvLineSvg from '@airclass/icons-svg/lib/asn/DvLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DvLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DvLineSvg}></AntdIcon>;
};

DvLine.displayName = 'DvLine';
DvLine.inheritAttrs = false;
export default DvLine;