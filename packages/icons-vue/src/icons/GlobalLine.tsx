// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GlobalLineSvg from '@airclass/icons-svg/lib/asn/GlobalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalLineSvg}></AntdIcon>;
};

GlobalLine.displayName = 'GlobalLine';
GlobalLine.inheritAttrs = false;
export default GlobalLine;