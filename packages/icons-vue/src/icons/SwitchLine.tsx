// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwitchLineSvg from '@airclass/icons-svg/lib/asn/SwitchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitchLineSvg}></AntdIcon>;
};

SwitchLine.displayName = 'SwitchLine';
SwitchLine.inheritAttrs = false;
export default SwitchLine;