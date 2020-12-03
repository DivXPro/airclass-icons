// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandHeartLineSvg from '@airclass/icons-svg/lib/asn/HandHeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandHeartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandHeartLineSvg}></AntdIcon>;
};

HandHeartLine.displayName = 'HandHeartLine';
HandHeartLine.inheritAttrs = false;
export default HandHeartLine;