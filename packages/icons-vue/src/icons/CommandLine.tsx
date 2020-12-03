// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CommandLineSvg from '@airclass/icons-svg/lib/asn/CommandLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommandLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandLineSvg}></AntdIcon>;
};

CommandLine.displayName = 'CommandLine';
CommandLine.inheritAttrs = false;
export default CommandLine;