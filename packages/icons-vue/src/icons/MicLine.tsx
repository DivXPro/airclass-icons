// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicLineSvg from '@airclass/icons-svg/lib/asn/MicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicLineSvg}></AntdIcon>;
};

MicLine.displayName = 'MicLine';
MicLine.inheritAttrs = false;
export default MicLine;