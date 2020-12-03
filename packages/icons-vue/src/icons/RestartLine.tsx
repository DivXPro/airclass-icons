// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestartLineSvg from '@airclass/icons-svg/lib/asn/RestartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestartLineSvg}></AntdIcon>;
};

RestartLine.displayName = 'RestartLine';
RestartLine.inheritAttrs = false;
export default RestartLine;