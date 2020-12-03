// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeSLineSvg from '@airclass/icons-svg/lib/asn/CodeSLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeSLineSvg}></AntdIcon>;
};

CodeSLine.displayName = 'CodeSLine';
CodeSLine.inheritAttrs = false;
export default CodeSLine;