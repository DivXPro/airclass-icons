// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodepenLineSvg from '@airclass/icons-svg/lib/asn/CodepenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodepenLineSvg}></AntdIcon>;
};

CodepenLine.displayName = 'CodepenLine';
CodepenLine.inheritAttrs = false;
export default CodepenLine;