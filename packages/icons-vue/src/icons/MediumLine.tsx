// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MediumLineSvg from '@airclass/icons-svg/lib/asn/MediumLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumLineSvg}></AntdIcon>;
};

MediumLine.displayName = 'MediumLine';
MediumLine.inheritAttrs = false;
export default MediumLine;