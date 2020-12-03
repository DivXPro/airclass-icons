// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RouterLineSvg from '@airclass/icons-svg/lib/asn/RouterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RouterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouterLineSvg}></AntdIcon>;
};

RouterLine.displayName = 'RouterLine';
RouterLine.inheritAttrs = false;
export default RouterLine;