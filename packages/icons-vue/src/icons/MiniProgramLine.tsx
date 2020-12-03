// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MiniProgramLineSvg from '@airclass/icons-svg/lib/asn/MiniProgramLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MiniProgramLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniProgramLineSvg}></AntdIcon>;
};

MiniProgramLine.displayName = 'MiniProgramLine';
MiniProgramLine.inheritAttrs = false;
export default MiniProgramLine;