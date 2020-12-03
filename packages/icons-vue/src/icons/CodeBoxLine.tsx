// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeBoxLineSvg from '@airclass/icons-svg/lib/asn/CodeBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeBoxLineSvg}></AntdIcon>;
};

CodeBoxLine.displayName = 'CodeBoxLine';
CodeBoxLine.inheritAttrs = false;
export default CodeBoxLine;