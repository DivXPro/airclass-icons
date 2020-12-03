// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeSSlashLineSvg from '@airclass/icons-svg/lib/asn/CodeSSlashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSSlashLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeSSlashLineSvg}></AntdIcon>;
};

CodeSSlashLine.displayName = 'CodeSSlashLine';
CodeSSlashLine.inheritAttrs = false;
export default CodeSSlashLine;