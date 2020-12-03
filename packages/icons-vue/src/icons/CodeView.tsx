// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeViewSvg from '@airclass/icons-svg/lib/asn/CodeView';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeView = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeViewSvg}></AntdIcon>;
};

CodeView.displayName = 'CodeView';
CodeView.inheritAttrs = false;
export default CodeView;