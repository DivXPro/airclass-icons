// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeLineSvg from '@airclass/icons-svg/lib/asn/CodeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeLineSvg}></AntdIcon>;
};

CodeLine.displayName = 'CodeLine';
CodeLine.inheritAttrs = false;
export default CodeLine;