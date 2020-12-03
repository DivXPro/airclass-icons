// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraSwitchLineSvg from '@airclass/icons-svg/lib/asn/CameraSwitchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraSwitchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraSwitchLineSvg}></AntdIcon>;
};

CameraSwitchLine.displayName = 'CameraSwitchLine';
CameraSwitchLine.inheritAttrs = false;
export default CameraSwitchLine;