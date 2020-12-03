// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlertLineSvg from '@airclass/icons-svg/lib/asn/AlertLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertLineSvg}></AntdIcon>;
};

AlertLine.displayName = 'AlertLine';
AlertLine.inheritAttrs = false;
export default AlertLine;