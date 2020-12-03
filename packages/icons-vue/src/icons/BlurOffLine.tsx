// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BlurOffLineSvg from '@airclass/icons-svg/lib/asn/BlurOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlurOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurOffLineSvg}></AntdIcon>;
};

BlurOffLine.displayName = 'BlurOffLine';
BlurOffLine.inheritAttrs = false;
export default BlurOffLine;