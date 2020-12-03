// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicOffLineSvg from '@airclass/icons-svg/lib/asn/MicOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicOffLineSvg}></AntdIcon>;
};

MicOffLine.displayName = 'MicOffLine';
MicOffLine.inheritAttrs = false;
export default MicOffLine;