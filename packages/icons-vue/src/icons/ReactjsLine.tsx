// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReactjsLineSvg from '@airclass/icons-svg/lib/asn/ReactjsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReactjsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReactjsLineSvg}></AntdIcon>;
};

ReactjsLine.displayName = 'ReactjsLine';
ReactjsLine.inheritAttrs = false;
export default ReactjsLine;