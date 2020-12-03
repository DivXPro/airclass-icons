// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MiniProgramFillSvg from '@airclass/icons-svg/lib/asn/MiniProgramFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MiniProgramFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniProgramFillSvg}></AntdIcon>;
};

MiniProgramFill.displayName = 'MiniProgramFill';
MiniProgramFill.inheritAttrs = false;
export default MiniProgramFill;