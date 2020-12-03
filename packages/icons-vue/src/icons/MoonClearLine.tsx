// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonClearLineSvg from '@airclass/icons-svg/lib/asn/MoonClearLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonClearLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonClearLineSvg}></AntdIcon>;
};

MoonClearLine.displayName = 'MoonClearLine';
MoonClearLine.inheritAttrs = false;
export default MoonClearLine;