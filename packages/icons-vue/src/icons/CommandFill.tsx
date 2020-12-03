// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CommandFillSvg from '@airclass/icons-svg/lib/asn/CommandFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommandFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandFillSvg}></AntdIcon>;
};

CommandFill.displayName = 'CommandFill';
CommandFill.inheritAttrs = false;
export default CommandFill;