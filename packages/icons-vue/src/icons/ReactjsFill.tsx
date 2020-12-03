// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ReactjsFillSvg from '@airclass/icons-svg/lib/asn/ReactjsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReactjsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReactjsFillSvg}></AntdIcon>;
};

ReactjsFill.displayName = 'ReactjsFill';
ReactjsFill.inheritAttrs = false;
export default ReactjsFill;